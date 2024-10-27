import Layout from './Layout'
import { mainPropTypes } from '../propType'

function Main({ className, title, description, tip, children }) {
  return (
    <Layout className={className} title={title} description={description} tip={tip}>
      {children}
    </Layout>
  )
}

Main.propTypes = mainPropTypes
Main.displayName = 'Main'

export default Main
