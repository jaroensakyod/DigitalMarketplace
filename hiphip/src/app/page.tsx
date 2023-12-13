import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import {Button, buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, CheckCircle, Copyright } from "lucide-react"
import Link from "next/link"


const perks = [
    {
        name: "Instant Devlivery",
        Icon: ArrowDownToLine,
        description: 'Get EA to your email and download them right away.',

    },
    {
        name: "Guaranteed Quality",
        Icon: CheckCircle,
        description: 'Evert EA on platform is verified by EAHero Team.',

    },
    {
        name: "For the Copyright",
        Icon: Copyright,
        description: 'Evert EA and Dashboard on Copyright',

    },
]

export default function Home() {
  return (
    <>
        <MaxWidthWrapper>
            <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:test-6xl">
                    Marketplace for {' '}
                    <span className="text-green-600">High Quality EA</span>
                    
                </h1>
                <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                Welcone to <span className="text-green-600 font-bold">EAHero</span> high quality trading exchange markets with expert advisors, dashboard and signals. You can also buy and sell your own EA
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
                    <Button variant='ghost'>Verified by EAHero &rarr;</Button>
                </div>
            </div>
            {/* TODO: List Product*/}
        </MaxWidthWrapper>
        <section className="border-t border-gray-200 bg-gray-50">
            <MaxWidthWrapper className="py-20">
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                    {perks.map((perk)=> (
                        <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                            <div className="md:flex-shrink-0 flex justify-center">
                                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                                    {<perk.Icon className="w-1/3 h-1/3"/>}
                                </div>
                            </div>
                            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                <h3 className="text-base font-medium text-gray-900">
                                    {perk.name}
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    {perk.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    </>

  )
}
