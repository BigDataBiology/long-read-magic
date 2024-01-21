import React, {FC} from 'react';
import Link from 'next/link';
import clsx from "clsx";

export type SignatureProps = {
    className?: string;
}

export const emojis = [
    {
        emoji: "👩🏻‍💻",
        title: "algorithms and code"
    },
    {
        emoji: "👩🏻‍🔬",
        title: "thorough research"
    },
    {
        emoji: "🕵🏻‍♀️",
        title: "attention to detail"
    },
    {
        emoji: "🤸🏻‍♀️",
        title: "mental cartwheels"
    },
    {
        emoji: "🎓",
        title: "expertise"
    },
    {
        emoji: "🏄🏻‍♀️ ",
        title: "surfing"
    },
    {
        emoji: "🛀🏻",
        title: "hot baths in between"
    },
    {
        emoji: "🤹🏻‍♀️",
        title: "framework juggling"
    },
    {
        emoji: "🌱",
        title: "personal growth"
    },
    {
        emoji: "🌈",
        title: "pride"
    },
    {
        emoji: "☀️",
        title: "sunny days"
    },
    {
        emoji: "🍔",
        title: "juicy burgers"
    },
    {
        emoji: "🍕",
        title: "pineapple on pizza"
    },
    {
        emoji: "🥂",
        title: "a toast"
    },
    {
        emoji: "🍾",
        title: "a fizzle and a bang"
    },
    {
        emoji: "🍝",
        title: "pasta (not spaghetti code!)"
    },
    {
        emoji: "🥗",
        title: "my favourite salad"
    },
    {
        emoji: "🌮",
        title: "una al pastor"
    },
    {
        emoji: "🧀",
        title: "lots of cheeeeeese"
    },
    {
        emoji: "🥨",
        title: "brezel breakfast"
    },
    {
        emoji: "🥐",
        title: "warm croissant"
    },
    {
        emoji: "🌶",
        title: "spice"
    },
    {
        emoji: "🌭",
        title: "chili-cheese-dogs"
    },
    {
        emoji: "🍤",
        title: "ebi"
    },
    {
        emoji: "🍧",
        title: ""
    },
    {
        emoji: "🍫",
        title: ""
    },
    {
        emoji: "☕️",
        title: "a cuppa"
    },
    {
        emoji: "🍜",
        title: ""
    },
    {
        emoji: "🎷",
        title: "jazz tunes"
    },
    {
        emoji: "🧩",
        title: "puzzlement"
    },
    {
        emoji: "🚀",
        title: "rocket science"
    },
    {
        emoji: "🎉",
        title: ""
    },
    {
        emoji: "📐",
        title: "precision"
    },
    {
        emoji: "🎈",
        title: "childish enthusiasm"
    },
    {
        emoji: "💞",
        title: "teamwork"
    },
    {
        emoji: "💖",
        title: "a gift wrap"
    },
    {
        emoji: "💤",
        title: "snooze"
    },
    {
        emoji: "🎵",
        title: "a note"
    },
    {
        emoji: "🎶",
        title: "a whistle"
    },
    {
        emoji: "🧼",
        title: "squeaky clean code"
    },
    {
        emoji: "🎀",
        title: "a gift wrap"
    }]

export const Signature: FC<SignatureProps> = ({className}) => {
    const rand = Math.floor(Math.random() * emojis.length)
    return (
        <div>
            <span className={className}>Made with </span><span title={emojis[rand].title}>{emojis[rand].emoji}</span>
            <span className={clsx(className)}> by <Link
                rel="noreferrer" href="https://github.com/annestaff"
                className="cursor-pointer text-navyBlue-light hover:text-indigo-300">Anne</Link>
            </span>
            </div>
    )
};

export default Signature;

