import { ref } from 'vue'


const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'TRAPHOLT WEBSITE',
      description: 'As part of a group of four, we collaborated to redesign the Trapholt museum website, with a special focus on families with children. Our project involved creating a more user-friendly platform, integrating interactive features, a family-friendly event calendar, kid-friendly navigation, educational resources, and community engagement tools. Our aim was to enhance the website to increase visitor engagement and promote a sense of excitement and discovery among families.',
      image: '/src/assets/img/trapholt-image.png',
      link: 'https://reasonsx.github.io/',
      category: 'web'
  
    },
    {
      id: 2,
      title: 'Portfolio Item 2',
      description: 'This is the second portfolio item',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.google.com',
      category: 'photo'
    },
    {
      id: 3,
      title: 'Portfolio Item 3',
      description: 'This is the third portfolio item',
      category: 'web'
    },
    {
      id: 4,
      title: 'Portfolio Item 2',
      description: 'This is the second portfolio item'
    }  
  ])

  return { portfolioItems }
}

export default getPortfolio
