import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"

//images
import ghkv from '../images/gh-kv.png'


const GalaxyHarajukuPage = () => (
    <Layout>
    <SEO title="[Galaxy Mobile Japan] Galaxy Harajuku Online Project" />
    <div className="section">
      <div className="container">
        <div className="kv-container">
      <img src={ghkv} alt="view of galaxy harajuku offline store"/>
      </div>
        <div className="title-container">
          <Fade bottom cascade>
            <h1>Galaxy Harajuku Online Project</h1>
          </Fade>
        </div>
      <div className="flex-container">
      <div class="flex-left">
        <p><b>Overview</b></p>
        <p>갤럭시 하라주쿠 온라인 프로젝트는 오프라인 플래그십 스토어의 체험 및 브랜딩 콘텐츠를 온라인에 구축하여, 더욱 강한 고객 경험을 이끌어내기 위해 제안되었습니다.</p>
        <p>갤럭시 모바일 재팬 공식 사이트의 2-depth 메뉴에 'Galaxy Harajuku' 메뉴를 신설하였으며, 오프라인 매장 층별 콘텐츠들을 웹 플랫폼 성격에 맞추어 선별/분석하여 하위 10개의 서브 페이지에 탑재하였습니다.</p>
      </div>
      <div class="flex-right">
        <p><b>Responsibility:</b></p>
        <p>웹 콘텐츠 기획/플랫폼 기획</p>
        <br/>
        <p><b>Tools:</b></p>
        <p>MS Office, Zeplin</p>
        <br/>
        <p><b>Timeline:</b></p>
        <p>2020.05 - 2020.12</p>
      </div>
      </div>
      </div>

    <div className="container">
    <div className="description-container">
          <h2>Proposal</h2>
          <h3>Background</h3>
          <p>COVID-19로 인해 발생한 오프라인 매장 방문 제한과 체험 콘텐츠 운영 중단 문제를 온라인 콘텐츠 도입을 통한 언택트 서비스로 전환하여 해결</p>
          <h3>Goals</h3>
          <p>1. Brand Side<br/>온라인 체험 콘텐츠 강화를 통해 갤럭시 모바일 재팬 페이지 공식 홈페이지로의 지속적 유입 증대와 브랜드 인지도 제고</p>
          <p>2. User Side<br/>플래그십 매장의 경험을 온/오프라인 융복합 콘텐츠로 소비하여 심리스한 경험 획득</p>
      </div>
      <div className="description-container">
          <h2>Research</h2>
          <h3>AS-IS Contents Anaylsis</h3>
          <p>갤럭시 하라주쿠 오프라인 플래그십 스토어에서 운영 중인 여러 콘텐츠 중 디지털화하여 온라인에 탑재할 콘텐츠 선정</p>

          <h3>TO-BE Reference Benchmarking</h3>
          <p>A Type: offline 공간과 online 공간의 1:1 matching<br/>공간 이미지, 3D 그래픽, 현장 실사 이미지 등을 활용하여 실제 offline 공간을 둘러보는듯한 느낌을 제공</p>
          <p>B Type: 그래픽 요소와 interaction을 활용한 공간감 구성<br/>영상, 레이아웃, 타이포그래피 등 그래픽 요소들에 interaction을 적용하여 online에서 새로운 공간감을 느낄 수 있도록 표현</p>

          </div>

          <div className="description-container">
          <h2>Challenge</h2>
          <h3>다수의 콘텐츠를 효율적으로 소구할 수 있으려면?</h3>
          <h3>향후 오프라인 매장으로의 방문을 유도하려면?</h3>
          <h3>원활한 운영성 업데이트를 위한 Admin 개편 방향은?</h3>
          </div>


          <div className="description-container">
          <h2>Solution Process</h2>
          <h3>Contents Grouping</h3> 
          <p>그룹핑 자료, IA 자료 첨부</p>
          <h3>Front wireframe</h3>
          <h3>Back Office wireframe</h3>
          </div>

          <div className="description-container">
          <h2>Final Deliver</h2>
          <h3>TC / QA 작성</h3> 
          <p>tc 문서</p>
          <h3>Release</h3>
          <h3>PC/모바일 시안 첨부</h3>
          </div>

          <a
              href={`https://www.galaxymobile.jp/galaxy-harajuku/`}
              className="primary-btn"
              target="_blank"
            >
              Visit
            </a>

    </div>
    </div>
    <Footer></Footer>
  </Layout>
    
)


export default GalaxyHarajukuPage