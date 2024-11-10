import Layout from './Layout'
import { mainPropTypes } from '../propType'

function Main({ className, title, description, tip, gutter, children, ...rest }) {
  return (
    <Layout {...rest} className={className} gutter={gutter} title={title} description={description} tip={tip}>
      {children}
    </Layout>
  )
}

Main.propTypes = mainPropTypes
Main.displayName = 'Main'

export default Main
