import nextra from 'nextra'
 
const withNextra = nextra({})
 
export default withNextra({
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/Manuais/2024-2-ConselhoDeliberativo',
  trailingSlash: true
})