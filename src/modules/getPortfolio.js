import { ref } from 'vue'


const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'Portfolio Item 1',
      description: 'This is the first portfolio item',
      image: 'https://via.placeholder.com/150',
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
