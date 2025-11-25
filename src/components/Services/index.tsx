import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export function Services() {
    return (
        <section className="py-16 w-full flex flex-col justify-center items-center px-12 md:py-24 bg-[#011331]" id="cases">
            <div className="container">
                <div className="text-center text-white space-y-4 mb-12">
                    <p className="text-lg font-bold text-[#B9C2D8] max-w-2xl mx-auto">
                        Serviços
                    </p>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B85FF]">
                        Nossas Especialidades Odontológicas
                    </h2>

                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-260 h-auto">
                        <Card className="p-0 overflow-hidden group border-0 shadow-none">
                            <img
                                alt="Clareamento e Lentes de Contato Dental"
                                src="/clareamento.png"
                                className="w-full h-100 object-cover rounded-2xl"
                            />
                            <CardHeader className="p-0">
                                <CardTitle className="text-lg font-bold">Clareamento &
                                    <span className="block">Lentes de Contato Dental</span> </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex items-center text-[#B9C2D8]">
                                    <p>
                                        Sorrisos mais brancos, harmônicos e naturais. Transforme sua estética dental com lentes ultrafinas e técnicas de clareamento seguro, realizadas por especialistas em estética do sorriso.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-0">
                                <Button className="w-full h-full flex justify-start p-0">
                                    <p className="text-start font-medium text-md text-[#0B85FF] leading-[25px]">Saiba mais sobre Lentes e
                                        <span className="block">Clareamento</span>
                                    </p>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="p-0 overflow-hidden group border-0 shadow-none">
                            <img
                                alt="Clareamento e Lentes de Contato Dental"
                                src="/implante.png"
                                className="w-full h-100 object-cover rounded-2xl"
                            />
                            <CardHeader className="p-0">
                                <CardTitle className="text-lg font-bold">Implante Dentário &
                                    <span className="block">Prótese Protocolo Fixo</span> </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex items-center text-[#B9C2D8]">
                                    <p>
                                        Recupere a função mastigatória e a
                                        estética com soluções avançadas de
                                        reabilitação oral. Implantes modernos
                                        e próteses fixas que devolvem conforto,
                                        segurança e a naturalidade do sorriso.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-0">
                                <Button className="w-full h-full flex justify-start p-0">
                                    <p className="text-start font-medium text-md text-[#0B85FF] leading-[25px]">Saiba mais sobre Implantes e
                                        <span className="block">Prótese Protocolo</span>
                                    </p>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="p-0 overflow-hidden group border-0 shadow-none">
                            <img
                                alt="Clareamento e Lentes de Contato Dental"
                                src="/aparelho.png"
                                className="w-full h-100 object-cover rounded-2xl"
                            />
                            <CardHeader className="p-0">
                                <CardTitle className="text-lg font-bold">Aparelho Invisível &
                                    <span className="block">Tratamento Ortodôntico</span> </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex items-center text-[#B9C2D8]">
                                    <p>
                                        Alinhe seus dentes de forma discreta,
                                        confortável e eficiente. Soluções ortodônticas modernas
                                        — incluindo alinhadores invisíveis — para entregar estética,
                                        saúde e um sorriso perfeitamente equilibrado.
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="p-0">
                                <Button className="w-full h-full flex justify-start p-0">
                                    <p className="text-start font-medium text-md text-[#0B85FF] leading-[25px]">Saiba mais sobre Ortodontia e 
                                        <span className="block">Aparelho Invisível</span>
                                    </p>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}