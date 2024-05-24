import rss, { pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
    return rss (
        {
            title: 'Alumno de Astro | Blog',
            description: 'Mi viaje de aprendizaje con Astro',
            site: context.site,
            items: await pagesGlobToRssItems(import.meta.glob('./**/*.md' )),
            custonData: `<language>en-us</language>`,
        }
    )
}