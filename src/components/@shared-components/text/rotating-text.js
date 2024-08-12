import { useState, useEffect } from 'react';

const RotatingText = () => {
    const words = ['KNOWLEDGE', 'INSPIRATION', 'MOTIVATION'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(50);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = words[currentWordIndex];

            if (isDeleting) {
                // Deleting logic
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
                setTypingSpeed(100); // Speed up deletion
            } else {
                // Typing logic
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
                setTypingSpeed(150); // Normal typing speed
            }

            if (!isDeleting && displayedText === fullText) {
                // Pause before starting to delete
                setTimeout(() => setIsDeleting(true), 2000); // Wait 2 seconds
            } else if (isDeleting && displayedText === '') {
                // Move to the next word after deletion
                setIsDeleting(false);
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, typingSpeed, currentWordIndex, words]);

    return (
        <span className="text-orange-500">{displayedText}</span>
    );
};

export default RotatingText;
