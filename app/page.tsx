import Link from "next/link"
import { CheckCircle } from "lucide-react"
import Logo from "@/components/logo"
import ContactButton from "@/components/contact-button"
import ActionButton from "@/components/action-button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-[310px] w-[310px] rounded-full bg-cyan-400 opacity-20 blur-[100px]"></div>
      </div>

      <header className="border-b border-white/10 py-4 backdrop-blur-md">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size="sm" showText={true} />
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#features" className="text-sm text-white/70 transition hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#capabilities" className="text-sm text-white/70 transition hover:text-white">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxXmeqT-D75qV3J-3ckrTJuIW-YcMyS8uzcuObxYpoVZ655A/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </nav>
          <ContactButton className="hidden md:flex" />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur-sm">
                <span className="mr-2 rounded-full bg-fuchsia-500 px-2 py-0.5 text-xs font-medium text-white">New</span>
                <span className="text-white/70">Limited Beta Access Available</span>
              </div>
              <h1 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                Transform Document Chaos Into Financial Clarity
              </h1>
              <p className="mt-6 text-lg text-white/70 md:text-xl">
                Neveen is an elegant, AI-powered invoice processing system that automates the capture, extraction, and
                validation of financial documents with old-world precision and modern intelligence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScxXmeqT-D75qV3J-3ckrTJuIW-YcMyS8uzcuObxYpoVZ655A/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-8 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-all hover:shadow-xl hover:shadow-fuchsia-500/30"
                >
                  Request Early Access
                </Link>
                <ActionButton>See It In Action</ActionButton>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-16 flex justify-center px-6">
            <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
              <div className="aspect-[16/9] w-full overflow-hidden">
                {/* Invoice processing dashboard visualization */}
                <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-black p-4">
                  <div className="grid h-full grid-cols-12 grid-rows-6 gap-2">
                    {/* Top bar */}
                    <div className="col-span-12 flex items-center justify-between rounded bg-black/60 p-2">
                      <div className="flex items-center gap-2">
                        <Logo size="sm" showText={false} />
                        <div className="text-xs font-medium text-white">NEVEEN DASHBOARD</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">Admin</div>
                        <div className="h-6 w-6 rounded-full bg-cyan-500/30"></div>
                      </div>
                    </div>

                    {/* Left sidebar - document list */}
                    <div className="col-span-3 row-span-5 rounded bg-black/60 p-2">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-xs font-medium text-white">RECENT INVOICES</div>
                        <div className="rounded bg-fuchsia-500/20 px-1 py-0.5 text-[10px] text-fuchsia-300">12 NEW</div>
                      </div>

                      {/* Invoice list */}
                      <div className="space-y-2">
                        <div className="rounded bg-white/5 p-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-medium text-white">INV-2023-0426</div>
                            <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                          </div>
                          <div className="mt-1 text-[10px] text-white/50">Acme Corp • $2,450.00</div>
                        </div>

                        <div className="rounded bg-fuchsia-500/10 p-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-medium text-white">INV-2023-0425</div>
                            <div className="h-2 w-2 rounded-full bg-fuchsia-500"></div>
                          </div>
                          <div className="mt-1 text-[10px] text-white/50">TechSolutions • $1,875.50</div>
                        </div>

                        <div className="rounded bg-white/5 p-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-medium text-white">INV-2023-0424</div>
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <div className="mt-1 text-[10px] text-white/50">GlobalServices • $3,200.00</div>
                        </div>

                        <div className="rounded bg-white/5 p-2">
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-medium text-white">INV-2023-0423</div>
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          </div>
                          <div className="mt-1 text-[10px] text-white/50">Innovate Inc • $950.75</div>
                        </div>
                      </div>
                    </div>

                    {/* Main content - document viewer */}
                    <div className="col-span-5 row-span-5 rounded bg-black/60 p-2">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-xs font-medium text-white">DOCUMENT VIEWER</div>
                        <div className="flex gap-2">
                          <div className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white/70">ZOOM</div>
                          <div className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white/70">ROTATE</div>
                        </div>
                      </div>

                      {/* Invoice preview */}
                      <div className="h-[calc(100%-1.5rem)] rounded bg-white p-3">
                        <div className="flex justify-between">
                          <div className="h-6 w-24 rounded bg-gray-200"></div>
                          <div className="h-6 w-16 rounded bg-gray-200"></div>
                        </div>

                        <div className="mt-4 h-4 w-32 rounded bg-gray-200"></div>
                        <div className="mt-2 h-3 w-48 rounded bg-gray-200"></div>
                        <div className="mt-1 h-3 w-40 rounded bg-gray-200"></div>

                        <div className="mt-6 h-4 w-24 rounded bg-gray-200"></div>
                        <div className="mt-2 h-3 w-48 rounded bg-gray-200"></div>
                        <div className="mt-1 h-3 w-40 rounded bg-gray-200"></div>

                        <div className="mt-6 h-px w-full bg-gray-200"></div>

                        <div className="mt-4 grid grid-cols-5 gap-2">
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                        </div>

                        <div className="mt-2 grid grid-cols-5 gap-2">
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                        </div>

                        <div className="mt-2 grid grid-cols-5 gap-2">
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                          <div className="h-3 rounded bg-gray-200"></div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <div className="h-4 w-24 rounded bg-gray-200"></div>
                        </div>
                        <div className="mt-2 flex justify-end">
                          <div className="h-4 w-32 rounded bg-gray-200"></div>
                        </div>
                        <div className="mt-2 flex justify-end">
                          <div className="h-5 w-36 rounded bg-gray-300"></div>
                        </div>
                      </div>
                    </div>

                    {/* Right sidebar - extracted data */}
                    <div className="col-span-4 row-span-5 rounded bg-black/60 p-2">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="text-xs font-medium text-white">EXTRACTED DATA</div>
                        <div className="rounded bg-cyan-500/20 px-1 py-0.5 text-[10px] text-cyan-300">
                          99.8% CONFIDENCE
                        </div>
                      </div>

                      {/* Extracted fields */}
                      <div className="space-y-3">
                        <div>
                          <div className="text-[10px] text-white/50">VENDOR</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">TechSolutions Inc.</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-white/50">INVOICE NUMBER</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">INV-2023-0425</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-white/50">DATE</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">April 25, 2023</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-white/50">DUE DATE</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">May 25, 2023</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-white/50">SUBTOTAL</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">$1,750.00</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-white/50">TAX</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-white">$125.50</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] text-white/50">TOTAL</div>
                          <div className="flex items-center justify-between">
                            <div className="text-xs font-medium text-white">$1,875.50</div>
                            <CheckCircle className="h-3 w-3 text-cyan-500" />
                          </div>
                        </div>

                        <div className="pt-2">
                          <div className="rounded bg-fuchsia-500/10 p-2">
                            <div className="text-[10px] text-white/50">ACTIONS</div>
                            <div className="mt-1 grid grid-cols-2 gap-1">
                              <div className="rounded bg-white/10 px-2 py-1 text-center text-[10px] text-white">
                                APPROVE
                              </div>
                              <div className="rounded bg-white/10 px-2 py-1 text-center text-[10px] text-white">
                                EDIT
                              </div>
                              <div className="rounded bg-white/10 px-2 py-1 text-center text-[10px] text-white">
                                EXPORT
                              </div>
                              <div className="rounded bg-white/10 px-2 py-1 text-center text-[10px] text-white">
                                REJECT
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">What Neveen Does</h2>
              <p className="mt-4 text-white/70">
                Neveen seamlessly ingests invoices from multiple channels and transforms unstructured documents into
                structured financial data ready for your accounting systems.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-500/50 hover:shadow-lg hover:shadow-fuchsia-500/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-600 to-fuchsia-900 opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-fuchsia-500/10 text-fuchsia-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Multi-Channel Intake</h3>
                  <p className="text-white/70">
                    Effortlessly capture invoices through direct uploads, email integration, or batch processing. Your
                    documents find their way to you, not the other way around.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-900 opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">AI-Powered Extraction</h3>
                  <p className="text-white/70">
                    Our AI doesn't just read your invoices—it understands them. Vendor identification, data extraction,
                    and validation happen with remarkable 99.8% accuracy.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 opacity-20 blur-2xl transition-all group-hover:opacity-30"></div>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Seamless Integration</h3>
                  <p className="text-white/70">
                    Structured data flows effortlessly into your existing financial ecosystems. Clean JSON and CSV
                    exports with the confidence of perfect data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm">
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500 opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>

              <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Core Capabilities</h2>
                  <p className="mt-4 text-white/70">
                    Neveen doesn't just process documents—it delivers financial intelligence with quiet confidence,
                    reducing accounts payable processing time by up to 80%.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Intelligent Validation</h3>
                        <p className="text-sm text-white/70">
                          Field-level confidence indicators provide transparent assurance, highlighting exactly where
                          human review may be needed.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Elegant Correction Interface</h3>
                        <p className="text-sm text-white/70">
                          When human review is needed, our intuitive interface makes corrections quick and effortless,
                          maintaining your workflow.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">
                        <svg
                          className="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">Audit-Ready Documentation</h3>
                        <p className="text-sm text-white/70">
                          Every document is processed with complete audit trails, ensuring compliance and transparency
                          for financial reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10">
                    <div className="aspect-square w-full">
                      {/* AI processing visualization */}
                      <div className="h-full w-full bg-black">
                        <div className="relative h-full w-full p-4">
                          {/* Document outline */}
                          <div className="absolute left-1/2 top-1/2 h-4/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/5"></div>

                          {/* Document content lines */}
                          <div className="absolute left-[30%] top-[25%] h-1 w-[40%] rounded-full bg-white/20"></div>
                          <div className="absolute left-[30%] top-[30%] h-1 w-[30%] rounded-full bg-white/20"></div>
                          <div className="absolute left-[30%] top-[35%] h-1 w-[35%] rounded-full bg-white/20"></div>

                          <div className="absolute left-[30%] top-[45%] h-1 w-[40%] rounded-full bg-white/20"></div>
                          <div className="absolute left-[30%] top-[50%] h-1 w-[25%] rounded-full bg-white/20"></div>

                          <div className="absolute left-[30%] top-[60%] h-1 w-[40%] rounded-full bg-white/20"></div>
                          <div className="absolute left-[30%] top-[65%] h-1 w-[35%] rounded-full bg-white/20"></div>
                          <div className="absolute left-[30%] top-[70%] h-1 w-[30%] rounded-full bg-white/20"></div>

                          {/* Extraction points */}
                          <div className="absolute left-[40%] top-[25%] h-3 w-3 animate-pulse rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50"></div>
                          <div className="absolute left-[50%] top-[45%] h-3 w-3 animate-pulse rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
                          <div className="absolute left-[45%] top-[60%] h-3 w-3 animate-pulse rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"></div>

                          {/* Data flow lines */}
                          <div className="absolute left-[42%] top-[25%] h-[20%] w-[20%] border-b border-r border-fuchsia-500/30"></div>
                          <div className="absolute left-[52%] top-[45%] h-[5%] w-[10%] border-b border-l border-cyan-500/30"></div>
                          <div className="absolute left-[47%] top-[60%] h-[10%] w-[15%] border-t border-r border-purple-500/30"></div>

                          {/* Structured data output */}
                          <div className="absolute right-[10%] top-[20%] flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-fuchsia-500"></div>
                              <div className="h-1 w-16 rounded-full bg-fuchsia-500/50"></div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
                              <div className="h-1 w-20 rounded-full bg-cyan-500/50"></div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                              <div className="h-1 w-12 rounded-full bg-purple-500/50"></div>
                            </div>
                          </div>

                          {/* Processing indicators */}
                          <div className="absolute bottom-[15%] right-[15%] flex flex-col gap-1">
                            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-500/0"></div>
                            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-500/0"></div>
                            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-purple-500/0"></div>
                          </div>

                          {/* Central processing node */}
                          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 shadow-lg shadow-fuchsia-500/20"></div>
                          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10"></div>

                          {/* Pulse rings */}
                          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-fuchsia-500/30 opacity-30"></div>
                          <div
                            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-cyan-500/20 opacity-20"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Perfect For</h2>
              <p className="mt-4 text-white/70">
                Neveen is designed for organizations that demand precision and efficiency in their financial operations.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/10">
                  <svg
                    className="h-5 w-5 text-fuchsia-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Financial Teams</h3>
                <p className="text-sm text-white/70">
                  Drowning in manual data entry and seeking to redirect skilled staff to higher-value financial
                  analysis.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                  <svg
                    className="h-5 w-5 text-cyan-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Businesses</h3>
                <p className="text-sm text-white/70">
                  Seeking to eliminate invoice processing errors and ensure accuracy in financial records and payments.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
                  <svg
                    className="h-5 w-5 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Organizations</h3>
                <p className="text-sm text-white/70">
                  Requiring audit-ready financial documentation and transparent processing for compliance.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/10">
                  <svg
                    className="h-5 w-5 text-fuchsia-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Companies</h3>
                <p className="text-sm text-white/70">
                  Looking to reduce accounts payable processing time by up to 80% and improve operational efficiency.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                  <svg
                    className="h-5 w-5 text-cyan-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Enterprises</h3>
                <p className="text-sm text-white/70">
                  Needing seamless integration with existing accounting systems and ERP platforms.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
                  <svg
                    className="h-5 w-5 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Growing Businesses</h3>
                <p className="text-sm text-white/70">
                  Scaling operations and needing financial processes that can grow without adding headcount.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="waitlist" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-sm md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Ready to Transform Your Invoice Processing?
                </h2>
                <p className="mt-4 text-white/70">
                  Join our exclusive beta program and be among the first to experience Neveen's invoice intelligence
                  platform. Early access members receive priority onboarding and dedicated support.
                </p>
                <div className="mt-10">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScxXmeqT-D75qV3J-3ckrTJuIW-YcMyS8uzcuObxYpoVZ655A/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-8 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition-all hover:shadow-xl hover:shadow-fuchsia-500/30"
                  >
                    Request Early Access
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-white/50">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <Logo size="sm" showText={true} />
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-xs hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs hover:text-white">
                Contact
              </Link>
            </div>
            <div>
              <p className="text-xs">&copy; {new Date().getFullYear()} Neveen. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

