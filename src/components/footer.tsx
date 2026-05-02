import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/50 bg-[#0f3045] text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-display text-2xl font-bold">SkillSphere</h3>
          <p className="mt-3 max-w-sm text-sm text-slate-300">
            A modern online learning platform to help learners master practical skills.
          </p>
          <p className="mt-3 text-sm">Contact: support@skillsphere.dev</p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Social</h4>
          <div className="space-y-2 text-sm">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="block hover:text-white">
              X (Twitter)
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="block hover:text-white">
              GitHub
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>
          <div className="space-y-2 text-sm">
            <Link href="/terms" className="block hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="block hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
