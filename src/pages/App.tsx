import Container from 'components/common/Container'
import Grid from 'components/common/Grid'
import SeoComponent from 'components/common/SeoComponent'
import Filter from 'components/homepage/Filter'
import ListCard from 'components/homepage/ListCard'
import Layout from 'components/layout/Layout'

function App() {
  return (
    <>
      <SeoComponent templateTitle="Kitabisa Homepage" />
      <Layout>
        <Container>
          <Grid>
            <div className="col-span-2 flex items-center justify-center lg:col-span-3">
              <img
                src="/kitabisa.png"
                className="mr-auto h-14 w-auto lg:mx-auto lg:h-20"
                alt="Logo Kita Bisa"
              />
            </div>
            <Filter />
          </Grid>
          <Grid className="mt-12">
            <ListCard />
          </Grid>
        </Container>
      </Layout>
    </>
  )
}

export default App
