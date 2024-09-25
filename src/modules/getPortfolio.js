import { ref } from 'vue'


const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'TRAPHOLT WEBSITE',
      description: 'As part of a group of four, we collaborated to redesign the Trapholt museum website, with a special focus on families with children. Our project involved creating a more user-friendly platform, integrating interactive features, kid-friendly navigation, educational resources, and community engagement tools. Our aim was to enhance the website to increase visitor engagement and promote a sense of excitement and discovery among families.',
      image: '/src/assets/img/trapholt-image.png',
      link: 'https://trapholt-redesign.netlify.app/',
      category: 'web'
  
    },
    {
      id: 6,
      title: 'FANTASY QUEST WEBSITE',
      description: 'As part of a group of four, we created a website for Fantasy Quest, a special event celebrating the 10th anniversary of the Fantasy Festival in Esbjerg. The site highlights event details, schedules for the family-friendly Day Quest and adult-focused Evening Quest, and links to Ticketmaster for ticket sales. It provides a user-friendly experience to promote the immersive role-playing adventure.',
      image: '/src/assets/img/fantasy_quest.png',
      link: ' https://project-fantasy-quest.web.app/',
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
      title: 'SCHOOL POSTER',
      description: 'This is a poster I created for International Day in my school. I wanted to create a design that was colorful and eye-catching, while still being informative.',
      image: '/src/assets/img/int-day.png',
      link_download: '/src/assets/PDF/poster-A4.pdf',
      category: 'graphic',
    },
    
  ])

  return { portfolioItems }
}

export default getPortfolio
