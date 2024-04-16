'use client'

import { Container } from '@/components/container'
import { Title } from '@/components/title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useCursor } from '@/store/use-cursor'
import { useLanguage } from '@/store/use-language'
import { motion } from 'framer-motion'

export const Features = () => {
  const { language } = useLanguage()
  const { setIsHovering, setIsNotHovering } = useCursor()

  return (
    <Container className='pb-40 lg:pb-60 xl:pb-80'>
      <Title label={language === 'en' ? 'Features' : 'Funkce'} />

      <div className='grid lg:grid-cols-2 gap-4 lg:gap-6'>
        <Accordion
          type='multiple'
          className='space-y-4'
          defaultValue={['frontend', 'newsletter', 'analytics']}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='frontend'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Front-end'}
                {language === 'cs' && 'Front-end'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I specialize in creating attractive and user-friendly websites with an emphasis on quality design and optimal user experience.'}
                {language === 'cs' &&
                  'Specializuji se na tvorbu atraktivních a uživatelsky přívětivých webových stránek s důrazem na kvalitní design a optimální uživatelskou zkušenost.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='ecommerce'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'E-Commerce'}
                {language === 'cs' && 'Eshop'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I offer a comprehensive e-commerce solution that makes it easy to manage products, secure payments and maximize conversions.'}
                {language === 'cs' &&
                  'Nabízím komplexní e-commerce řešení, které umožňuje snadnou správu produktů, bezpečné platby a maximalizaci konverzí.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='booking'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Booking Service'}
                {language === 'cs' && 'Rezervační Systém'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide a custom booking platform with the ability to schedule and manage bookings for different types of business.'}
                {language === 'cs' &&
                  'Poskytuji vlastní rezervační platformu s možností plánování a správy rezervací pro různé typy podnikání.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='social'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Social Site'}
                {language === 'cs' && 'Sociální Síť'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I develop and implement social networks with user interaction and content sharing features to strengthen the community.'}
                {language === 'cs' &&
                  'Vyvíjím a implementuji sociální sítě s funkcemi interakce mezi uživateli a možností sdílení obsahu pro posílení komunity.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='platform'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Platform'}
                {language === 'cs' && 'Platforma'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I create complex, multi-purpose platforms that allow users to interact, share and manage content.'}
                {language === 'cs' &&
                  'Vytvářím komplexní platformy pro různé účely, umožňující uživatelům interakci, sdílení a správu obsahu.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='3d web'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && '3D Website'}
                {language === 'cs' && '3D Web'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I design and create websites with 3D elements and visualizations to increase interactivity and attractiveness for users.'}
                {language === 'cs' &&
                  'Navrhuji a vytvářím stránky s 3D prvky a vizualizacemi pro zvýšení interaktivity a atraktivity pro uživatele.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='webapp'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Web Application'}
                {language === 'cs' && 'Webová aplikace'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I develop scalable web applications with intuitive interfaces and advanced features for different business areas.'}
                {language === 'cs' &&
                  'Rozvíjím škálovatelné webové aplikace s intuitivním rozhraním a pokročilými funkcemi pro různé oblasti podnikání.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='newsletter'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Newsletter'}
                {language === 'cs' && 'Newsletter'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I offer the implementation and management of a newsletter to keep in touch with clients and keep them regularly informed of news.'}
                {language === 'cs' &&
                  'Nabízím implementaci a správu newsletteru pro udržování kontaktu s klienty a pravidelné informování o novinkách.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='hosting'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Hosting'}
                {language === 'cs' && 'Hosting'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide reliable hosting with sufficient capacity and security features to keep your website running smoothly.'}
                {language === 'cs' &&
                  'Poskytuji spolehlivý hosting s dostatečnou kapacitou a bezpečnostními funkcemi pro bezproblémový provoz webových stránek.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='analytics'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Analytics Reports'}
                {language === 'cs' && 'Analytické Přehledy'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide detailed analytics and reports to help understand user behavior and optimize the site.'}
                {language === 'cs' &&
                  'Zajišťuji detailní analytické zprávy a reporty, které pomáhají porozumět chování uživatelů a optimalizovat stránky.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='email form'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Email Form'}
                {language === 'cs' && 'Emailový Formulář'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I design and integrate forms to efficiently collect and manage contact information and user feedback.'}
                {language === 'cs' &&
                  'Navrhuji a integruji formuláře pro efektivní sběr a správu kontaktních informací a zpětnou vazbu od uživatelů.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='3d elements'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && '3D Elements'}
                {language === 'cs' && '3D Prvky'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I implement 3D elements into websites that increase attractiveness and interactivity for visitors.'}
                {language === 'cs' &&
                  'Implementuji 3D prvky do webových stránek, které zvyšují atraktivitu a interaktivitu pro návštěvníky.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>

        <Accordion
          type='multiple'
          className='space-y-4'
          defaultValue={['maps', 'seo', 'popups']}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='admin interface'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Admin Interface'}
                {language === 'cs' && 'Administrační Rozhraní'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I create user-friendly admin interfaces for easy management of content and site features.'}
                {language === 'cs' &&
                  'Vytvářím uživatelsky přívětivá administrátorská rozhraní pro snadnou správu obsahu a funkcí webu.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='popups'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Popups'}
                {language === 'cs' && 'Vyskakovací Okna'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I design and implement pop-ups to efficiently display actions, menus or important information to users.'}
                {language === 'cs' &&
                  'Navrhuji a implementuji vyskakovací okna pro efektivní zobrazení akcí, nabídek nebo důležitých informací pro uživatele.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='cdn'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'CDN Integration'}
                {language === 'cs' && 'CDN Integrace'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide Content Delivery Network (CDN) integration for fast content loading and improved site performance.'}
                {language === 'cs' &&
                  'Zajišťuji integraci Content Delivery Network (CDN) pro rychlé načítání obsahu a zlepšení výkonu stránek.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='chatbot'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Chatbot'}
                {language === 'cs' && 'Chatbot'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I create chatbots to interact with users and improve their experience on the site.'}
                {language === 'cs' &&
                  'Vytvářím chatboty pro interaktivní komunikaci s uživateli a zlepšení jejich zkušeností na stránkách.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='db'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Database Connection'}
                {language === 'cs' && 'Napojení na Databázi'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide interconnection of web applications with databases for data storage and management.'}
                {language === 'cs' &&
                  'Zabezpečuji propojení webových aplikací s databázemi pro ukládání a správu dat.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='anims'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Animations'}
                {language === 'cs' && 'Animace'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I implement animations to increase the attractiveness and interactivity of websites.'}
                {language === 'cs' &&
                  'Implementuji animace pro zvýšení atraktivity a interaktivity webových stránek.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='mobile'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Mobile Friendly'}
                {language === 'cs' && 'Mobilní Responzivita'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I optimize websites for mobile devices to ensure a smooth and user-friendly experience.'}
                {language === 'cs' &&
                  'Optimalizuji webové stránky pro mobilní zařízení, aby byla zajištěna plynulá a uživatelsky přívětivá zkušenost.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='domain'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Domain'}
                {language === 'cs' && 'Doména'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I help register and manage domains for websites with an emphasis on security and proper setup.'}
                {language === 'cs' &&
                  'Pomáhám s registrací a správou domén pro webové stránky s důrazem na bezpečnost a správné nastavení.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='indexing'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Search Engines Indexing'}
                {language === 'cs' && 'Indexování ve Vyhledávačích'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide site optimization for better indexing in search engines and improved visibility on the Internet.'}
                {language === 'cs' &&
                  'Zajišťuji optimalizaci stránek pro lepší indexaci ve vyhledávačích a zlepšení viditelnosti na internetu.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='seo'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'SEO'}
                {language === 'cs' && 'SEO'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'I provide Search Engine Optimization (SEO) strategies and implementation to improve positions in search results and gain organic traffic.'}
                {language === 'cs' &&
                  'Poskytuji strategie a implementaci Search Engine Optimization (SEO) pro zlepšení pozic ve výsledcích vyhledávání a získání organického provozu.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='multilang'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Multilingualism'}
                {language === 'cs' && 'Multijazyžnost'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'It provides the ability to display site content in different languages, expanding the audience and allowing users to choose their preferred language.'}
                {language === 'cs' &&
                  'Poskytuje možnost zobrazovat obsah stránek v různých jazycích, což rozšiřuje publikum a umožňuje uživatelům vybrat si preferovaný jazyk.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <AccordionItem value='maps'>
              <AccordionTrigger
                onMouseEnter={setIsHovering}
                onMouseLeave={setIsNotHovering}
              >
                {language === 'en' && 'Interactive Maps'}
                {language === 'cs' && 'Interaktivní Mapy'}
              </AccordionTrigger>
              <AccordionContent>
                {language === 'en' &&
                  'It includes the implementation of interactive maps into the website with customisation and navigation options for users, improving user experience and facilitating localisation.'}
                {language === 'cs' &&
                  'Zahrnuje implementaci interaktivních map do webových stránek s možností přizpůsobení a navigace pro uživatele, což zlepšuje uživatelskou zkušenost a usnadňuje lokalizaci.'}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </div>
    </Container>
  )
}
