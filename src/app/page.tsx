"use client";

import { useState } from 'react';
import { Button } from '@/components/button';
import { Checkbox } from '@/components/checkbox';
import { Input } from '@/components/input';
import { Label } from '@/components/label';

export default function Home() {
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [length, setLength] = useState(18);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    if (includeLetters) chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSpecial) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (chars === '') {
      setPassword('Please select at least one option');
      return;
    }
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Password Generator
          </h1>
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="letters"
                checked={includeLetters}
                onCheckedChange={(checked) => setIncludeLetters(checked as boolean)}
              />
              <Label htmlFor="letters">Include Letters</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={includeNumbers}
                onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
              />
              <Label htmlFor="numbers">Include Numbers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="special"
                checked={includeSpecial}
                onCheckedChange={(checked) => setIncludeSpecial(checked as boolean)}
              />
              <Label htmlFor="special">Include Special Symbols</Label>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="length">Password Length</Label>
              <Input
                id="length"
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                min="1"
                max="100"
              />
            </div>
            <Button onClick={generatePassword} className="w-full">
              Generate
            </Button>
            {password && (
              <div className="mt-4 p-4 bg-muted rounded-md">
                <p className="text-sm font-mono break-all">{password}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
