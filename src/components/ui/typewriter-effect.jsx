"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate("span", {
        display: "inline-block",
        opacity: 1,
        width: "fit-content",
      }, {
        duration: 0.3,
        delay: stagger(0.1),
        ease: "easeInOut",
      });
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
                  {char}
                </motion.span>
              ))}
              {idx < wordsArray.length - 1 && <span>&nbsp;</span>}
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}>
                  {char}
                </span>
              ))}
              {idx < wordsArray.length - 1 && <span>&nbsp;</span>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}>
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}>
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}></motion.span>
    </div>
  );
};

export const TypewriterEffectCycle = ({
  sentences,
  className,
  cursorClassName,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    const fullText = currentSentence.map(word => word.text).join(" ");

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next sentence
          setIsDeleting(false);
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentSentenceIndex, sentences, typingSpeed, deletingSpeed, pauseDuration]);

  // Get current sentence to apply className to each word
  const currentSentence = sentences[currentSentenceIndex];
  const words = currentSentence.map(word => word.text);
  const wordsWithClasses = currentSentence;
  
  let currentCharIndex = 0;
  const renderText = () => {
    return wordsWithClasses.map((wordObj, wordIdx) => {
      const wordText = wordObj.text;
      const wordLength = wordText.length;
      const wordStartIndex = currentCharIndex;
      const wordEndIndex = wordStartIndex + wordLength;
      
      // Check if this word should be rendered based on current typing progress
      if (currentText.length <= wordStartIndex) {
        currentCharIndex += wordLength + 1; // +1 for space
        return null;
      }
      
      // Calculate how many characters of this word to show
      const charsToShow = Math.min(
        currentText.length - wordStartIndex,
        wordLength
      );
      
      const visibleText = wordText.slice(0, charsToShow);
      currentCharIndex += wordLength + 1; // +1 for space
      
      return (
        <span key={wordIdx} className={cn("", wordObj.className)}>
          {visibleText}
          {wordIdx < wordsWithClasses.length - 1 && charsToShow === wordLength && "\u00A0"}
        </span>
      );
    }).filter(Boolean);
  };

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <span className="inline-block" style={{ whiteSpace: 'nowrap' }}>
        {renderText()}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block w-[3px] h-[1em] bg-green-500",
          cursorClassName
        )}
      />
    </div>
  );
};
