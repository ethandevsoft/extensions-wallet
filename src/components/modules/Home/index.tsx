import Header from 'components/modules/Header'
import Container from 'components/elements/Layouts/Container'
import Content from 'components/elements/Layouts/Content'
import SearchBar from '../SearchBar'

export default function Home() {
  return (
    <Container>
      <>
        <Header />
        <Content>
          <SearchBar />
        </Content>
      </>
    </Container>
  )
}
