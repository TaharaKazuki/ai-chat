import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="relative size-72">
        <Image alt="NotFound" fill src={'/assets/not-found.svg'} />
      </div>
      <p className="text-center text-sm text-slate-400">
        ページが見つかりません
      </p>
      <Link href="/conversation">Conversionページに戻る</Link>
    </div>
  );
}
