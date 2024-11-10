import Layout from './Layout'
import { mainPropTypes } from '../propType'

function Main({ className, title, description, tip, children, responsive, gutter, ...rest }) {
  return (
    <Layout
      {...rest}
      className={className}
      responsive={responsive}
      gutter={gutter}
      title={title}
      description={description}
      tip={tip}
    >
      {children}
    </Layout>
  )
}

Main.propTypes = mainPropTypes
Main.displayName = 'Main'

export default Main
