import { Button } from "../ui/button";

export function Headline() {
    return (
        <section className="relative w-full flex flex-col justify-center md:items-start lg:items-center overflow-hidden bg-white h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-screen py-10">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/headline-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover object-right"
                />
            </div>


            {/* Conteúdo */}
            <div className="container relative z-20">
                <div className="sm:max-w-md md:max-w-2xl text-white text-center flex flex-col items-center sm:items-start sm:text-left px-10 md:px-5 lg:px-10 space-y-[-8px]">
                    <h1 className="font-heading font-bold text-[30px] sm:text-[35px] leading-10 sm:leading-6 md:leading-12 lg:leading-22 md:text-[58px] lg:text-[78px]">
                        Transformando
                        <span className="block text-[43px] sm:text-[50px] font-medium leading-14 sm:leading-12 md:leading-20 lg:leading-20 md:text-[82px] lg:text-[110px]">sorrisos em</span>
                    </h1>
                    <p className="font-heading font-medium tracking-tight text-[20px] sm:leading-5 md:leading-12 lg:leading-12 sm:text-xl md:text-[38px] lg:text-[48px] mt-4">Garça-SP com tecnologia e<span className="block">especialistas de alto padrão</span></p>

                    <Button className="w-full max-w-[270px] sm:max-w-[230px] md:max-w-[400px] lg:max-w-[500px] h-9 md:h-12 text-white bg-[#0C8BD2] mt-8 md:mt-7 flex justify-center sm:justify-start rounded-full">
                        <h1 className="text-[11px] w-full text-center sm:text-[10px] md:text-lg lg:text-xl font-medium">QUERO TRANSFORMAR MEU SORRISO</h1>
                    </Button>
                </div>
            </div>
        </section>
    );
}