import Container from 'components/common/Container'
import Grid from 'components/common/Grid'
import Filter from 'components/homepage/Filter'
import Layout from 'components/layout/Layout'

function App() {
  return (
    <Layout>
      <Container>
        <Grid>
          <div className="col-span-3 flex items-center justify-center">
            <img
              src="/src/public/kitabisa.png"
              className="h-20 w-auto mx-auto"
              alt="Logo Kita Bisa"
            />
          </div>
          <Filter />
        </Grid>
      </Container>
    </Layout>
  )
}

export default App
