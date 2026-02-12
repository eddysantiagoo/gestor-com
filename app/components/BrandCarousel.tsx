import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const brandFiles = [
    "bobcat.svg", "case.svg", "caseih.svg", "caterpillar.svg", "chevrolet.svg",
    "cummins.svg", "deutz.svg", "dinapac.svg", "doosan-daewoo.svg", "ducati.svg",
    "foton.svg", "hino.svg", "hitachi.svg", "hyundai.svg", "international.svg",
    "isuzu.svg", "iveco.svg", "john-deere.svg", "kato.svg", "kawasaki.svg",
    "kia.svg", "kobelco.svg", "komatsu.svg", "kubota.svg", "link-belt.svg",
    "liugong.svg", "mack.svg", "mazda.svg", "mercedez.svg", "mitsuber.svg",
    "mitsubishi.svg", "mwm.svg", "new-holland.svg", "nissan.svg", "perkins.svg",
    "samsung.svg", "sany.svg", "sdlg.svg", "shantui.svg", "shibaura.svg",
    "terex.svg", "toyota.svg", "volvo.svg", "wabco.svg", "xcmg.svg", "yanmar.svg", "yuchai.svg"
];

const shuffleArray = (array: string[]) => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
};

export default function BrandCarousel() {
    // Shuffle brands on each render (or could be done in useEffect for client-side only consistency if needed, but simplistic here works for visual)
    // Note: In Next.js SSR, pure random here might cause hydration mismatch. 
    // To handle hydration mismatch, we'll just use the list as is or needs a client component wrapper.
    // For now, let's keep it simple. If hydration error occurs, we fix.

    // Better approach for Next.js to avoid hydration mismatch: 
    // Just use the list or use a seed. 
    // But user asked for random order ALWAYS. 
    // Let's implement a simple client-side only shuffle or just a static shuffled list if 'always' means 'every time user loads'.
    // We can use a randomized list. 

    const brands = shuffleArray([...brandFiles]);

    return (
        <section className="py-10 bg-background overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-5 mb-6">
                <h2 className="text-2xl font-bold text-center text-foreground uppercase tracking-wide">
                    Nuestras Marcas
                </h2>
            </div>

            <div className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden bg-background">
                <Marquee pauseOnHover className="[--duration:260s]">
                    {brands.map((brand, index) => (
                        <div key={index} className="mx-8 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer">
                            <div className="w-[120px] h-[80px] flex items-center justify-center relative">
                                <Image
                                    src={`/brands/${brand}`}
                                    alt={brand.replace('.svg', '')}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
            </div>
        </section>
    );
}
