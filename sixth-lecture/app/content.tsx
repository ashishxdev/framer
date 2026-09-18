import { AnimatedText } from "./components/ui/animate-text";
import { AnimationSequences } from "./components/ui/animate-sequence";
export default function Content() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-black">
        {/* <AnimatedText /> */}
        <AnimationSequences />
      </div>
    </>
  );
}
