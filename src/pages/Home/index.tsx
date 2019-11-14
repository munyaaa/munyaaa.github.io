import React from 'react'
import Page from '../../components/Page'
import Navbar from '../../components/Navbar'
import ImageProfile from '../../components/ImageProfile'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import Icon from '../../components/Icon'

class Home extends React.Component {
    render () {
        return (
            <Page>
                <Navbar/>
                <Layout direction="row">
                    <ImageProfile/>
                    <Layout direction="column">
                        <Text color="transparent" fontSize="60pt" fontWeight={900} stroke="2pt whitesmoke" content="HELLO!"></Text>
                        <Text color="#ffca3a" fontSize="30pt" fontWeight={600} content="I'M JESSI"></Text>
                        <Text color="#ffca3a" fontSize="20pt" fontWeight={300} content="Graphic Designer & Front End Developer"></Text>
                        <Layout direction="row">
                            <Icon Url="https://instagram.com/jessijess_99" Type="fas" Data="envelope-square"></Icon>
                            <Icon Url="https://github.com/munyaaa" Type="fab" Data="github"></Icon>
                            <Icon Url="https://linkedin.com/in/jessicajimantoro" Type="fab" Data="linkedin"></Icon>
                            <Icon Url="https://line.me/ti/p/~jessi_jess" Type="fab" Data="line"></Icon>
                            <Icon Url="https://instagram.com/jessijess_99" Type="fab" Data="instagram"></Icon>
                        </Layout>
                    </Layout>
                </Layout>
            </Page>
        )
    }
}

export default Home