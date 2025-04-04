"use client";

import { Leaf } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between rounded-xl p-2 m-3 px-6 py-4 border-b border-green-200 dark:border-green-700 bg-white dark:bg-black h-16 shadow-lg">
        <a href="/"><div className="flex items-center space-x-3">
          <Leaf className="h-8 w-8 text-green-600 dark:text-green-400" />
          <h1 className="text-2xl font-bold text-green-800 dark:text-green-200">
            Ayurveda AI
          </h1>
        </div></a>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <SignedOut>
            <SignInButton>
              <InteractiveHoverButton>Sign In</InteractiveHoverButton>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>
      {/* Spacer div so content isn't hidden behind navbar */}
      <div className="h-16" />
    </div>
  );
}
