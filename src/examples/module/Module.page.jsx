import Page from 'remote:self/Page'
import Module from 'remote:self/Module'
import { Left, Right } from 'remote:self/Layout'

function Example() {
  return (
    <Page title="Page title" description="description">
      <Left title="Left Title">
        {/* <Module title="Module Title" description="description"></Module> */}
        {/* <Module title="Module Title" description="description"></Module> */}
        <p>xxxx</p>
      </Left>
      <Module title="Module Title" description="description" size={{ base: 4, md: 8 }}></Module>
      <Module title="Module Title" description="description" size={{ base: 8, md: 4 }}>
        <Module title="Module Title" description="description" variant="ghost" size={6}>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
        <Module title="Module Title" description="description" variant="ghost" size={6}>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
      </Module>
      <Module title="Module Title" description="description" size={8} variant="ghost" collapsible tip="xxx">
        <Module title="Module Title" description="description" size={6}>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
        <Module title="Module Title" description="description" size={6}>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
          <p>xxxxx</p>
        </Module>
      </Module>
      <Module title="Module Title" description="description" size={4} variant="ghost">
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
        <p>xxxxx</p>
      </Module>
      <Right title="Right Title" description="description">
        <Module title="Module Title" description="description"></Module>
      </Right>
    </Page>
  )
}

export default Example
