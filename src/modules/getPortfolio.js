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
      title: 'TRAPHOLT POSTER 1',
      description: 'This is the first poster I did for the Trapholt museum project. I wanted to create a poster that was simple and easy to read, while still being visually appealing. I used a combination of blobs and clean lines to create a modern and eye-catching design.',
      image: '/src/assets/img/poster1.png',
      link_download: '/src/assets/img/poster1.png',
      category: 'graphic'
    },
    {
      id: 3,
      title: 'TRAPHOLT POSTER 2',
      description: 'This is the second poster I did for the Trapholt museum project. I wanted to create a poster that was fun and engaging, while still being informative. I used a combination of bright colors and bold typography to create a design that would catch the eye of passersby.',
      image: '/src/assets/img/poster2.png',
      link_download: '/src/assets/img/poster2.png',
      category: 'graphic'
    },
    {
      id: 4,
      title: 'INFOGRAPHIC ABOUT GEN-Z',
      description: 'This is an infographic I created about Gen-Z. I wanted to create a visually engaging and informative piece that would help people understand more about this generation especially how is Gen-Z changing the workplace.',
      image: '/src/assets/img/genz.png',
      link_download: '/src/assets/PDF/infographic.pdf',
      category: 'graphic'
    },
    {
      id: 5,
      title: '  project 5',
      description: 'This is a project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      category: 'web'
    }  
  ])

  return { portfolioItems }
}

export default getPortfolio
