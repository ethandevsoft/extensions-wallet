import Header from 'components/modules/Header'
import SearchBar from 'components/modules/SearchBar'
import Container from 'components/elements/Layouts/Container'
import Content from 'components/elements/Layouts/Content'
import MainContent from 'components/elements/Layouts/MainContent'
import Experiences from 'components/modules/Home/Experiences'

export default function Home() {
  return (
    <Container>
      <>
        <Header />
        <Content>
          <>
            <SearchBar />
            <MainContent>
              <Experiences />
            </MainContent>
          </>
        </Content>
      </>
    </Container>
  )
}
