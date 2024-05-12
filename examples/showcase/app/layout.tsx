import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ServerActionUtilsProvider } from "server-actions-wrapper/src"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import SideNav from "./_components/side-nav"
import TopNav from "./_components/top-nav"
import { getDocPosts } from "@/lib/docs"
import { TooltipProvider } from "@/components/ui/tooltip"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "server-actions-wrapper",
  description: "Build scalable, lightweight server actions."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const docPosts = getDocPosts()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased overflow-y-scroll overflow-x-hidden  overscroll-none",
        inter
      )}>
        <ServerActionUtilsProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              <div className="flex flex-col gap-6">
                <TopNav docPosts={docPosts} />
                <div className="flex flex-row gap-10 mx-10 px-4 max-w-screen-xl w-full pt-2 pb-4">
                  <SideNav docPosts={docPosts} />
                  <div className="flex-1 overflow-hidden max-w-full lg:pl-[270px] md:pl-[270px] xl:flex flex-row gap-10 justify-end">
                    {children}
                  </div>
                </div>
              </div>
            </TooltipProvider>
            <Toaster duration={3000} />
          </ThemeProvider>
        </ServerActionUtilsProvider>
      </body>
    </html>
  )
}
