import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-montserrat font-bold text-primary">
              &lt; EXILE
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#bio" className="text-foreground hover:text-primary transition-colors font-open-sans">
                Биография
              </a>
              <a href="#work" className="text-foreground hover:text-primary transition-colors font-open-sans">
                Творчество
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-open-sans">
                Галерея
              </a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Mail" size={16} className="mr-2" />
              Контакт
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-xs font-montserrat">
                  Творческий Портфолио
                </Badge>
                <h1 className="text-6xl lg:text-8xl font-montserrat font-black text-foreground leading-tight">
                  ИЛЬЯ
                  <br />
                  <span className="text-primary">EXILE</span>
                </h1>
                <p className="text-xl text-muted-foreground font-open-sans max-w-lg">
                  Современный художник, создающий уникальные произведения на стыке 
                  цифрового и традиционного искусства
                </p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="font-montserrat font-semibold">
                  <Icon name="Play" size={18} className="mr-2" />
                  Смотреть работы
                </Button>
                <Button variant="outline" size="lg" className="font-montserrat">
                  <Icon name="Download" size={18} className="mr-2" />
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/img/6249ab87-8d68-4085-a771-bd7ee412b53f.jpg" 
                  alt="Илья Exile" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <Icon name="Sparkles" size={32} className="text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section id="bio" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-montserrat font-bold text-foreground mb-4">
              Биография
            </h2>
            <p className="text-lg text-muted-foreground font-open-sans max-w-2xl mx-auto">
              Путешествие через искусство и творчество
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-8">
                <div className="text-primary font-montserrat font-bold text-lg mb-4">
                  2010-2015
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-foreground">
                  Начало пути
                </h3>
                <p className="text-muted-foreground font-open-sans">
                  Обучение в художественной академии, первые эксперименты 
                  с цифровыми медиа и традиционной живописью.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-8">
                <div className="text-primary font-montserrat font-bold text-lg mb-4">
                  2016-2020
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-foreground">
                  Становление стиля
                </h3>
                <p className="text-muted-foreground font-open-sans">
                  Участие в международных выставках, разработка авторского 
                  подхода к созданию арт-объектов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
              <CardContent className="p-8">
                <div className="text-primary font-montserrat font-bold text-lg mb-4">
                  2021-2024
                </div>
                <h3 className="font-montserrat font-semibold text-xl mb-3 text-foreground">
                  Современность
                </h3>
                <p className="text-muted-foreground font-open-sans">
                  Персональные выставки, коллаборации с галереями, 
                  работа с цифровыми технологиями.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-montserrat font-bold text-foreground mb-4">
              Творчество
            </h2>
            <p className="text-lg text-muted-foreground font-open-sans max-w-2xl mx-auto">
              Исследование границ между реальным и цифровым
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Абстрактные композиции",
                description: "Серия работ, исследующих взаимодействие цвета и формы",
                techniques: ["Акрил", "Цифровая обработка"]
              },
              {
                title: "Инсталляции",
                description: "Пространственные объекты для галерейных экспозиций",
                techniques: ["Смешанная техника", "LED-подсветка"]
              },
              {
                title: "NFT коллекции",
                description: "Эксперименты с блокчейн-технологиями в искусстве",
                techniques: ["3D-моделирование", "Генеративное искусство"]
              },
              {
                title: "Портретная живопись",
                description: "Современная интерпретация классического жанра",
                techniques: ["Масло", "Холст"]
              },
              {
                title: "Интерактивные проекты",
                description: "Произведения, реагирующие на присутствие зрителя",
                techniques: ["Сенсоры", "Проекция"]
              },
              {
                title: "Коллаборации",
                description: "Совместные проекты с другими художниками",
                techniques: ["Разные медиа", "Концептуальное искусство"]
              }
            ].map((work, index) => (
              <Card key={index} className="group border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Icon name="Palette" size={24} className="text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {work.techniques.length} техники
                    </Badge>
                  </div>
                  <h3 className="font-montserrat font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground font-open-sans text-sm mb-4">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.techniques.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-montserrat font-bold text-foreground mb-4">
              Галерея
            </h2>
            <p className="text-lg text-muted-foreground font-open-sans max-w-2xl mx-auto">
              Избранные работы и проекты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 lg:row-span-2">
              <Card className="group border-border bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                <div className="relative h-full min-h-[400px]">
                  <img 
                    src="/img/dfc378bc-c6ec-4e62-8875-9ca1637ec1f6.jpg" 
                    alt="Gallery artwork" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                      Главная инсталляция
                    </h3>
                    <p className="text-muted-foreground font-open-sans text-sm">
                      Центральная работа коллекции 2024
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="group border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative h-64">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-montserrat font-medium text-foreground text-sm">
                      Работа #{index + 1}
                    </h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="font-montserrat">
              <Icon name="ExternalLink" size={18} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-montserrat font-bold text-primary">
              &lt; EXILE
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
            <p className="text-muted-foreground font-open-sans text-sm">
              © 2024 Илья Exile. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}