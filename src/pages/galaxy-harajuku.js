import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ghkv from '../images/gh-kv.png'
import ghbe01 from '../images/gh-bench01.png'
import ghbe02 from '../images/gh-bench02.png'
import ghstore from '../images/gh-store.png'


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
          <h3>Benchmark</h3>
          <p>두 가지 컨셉 방향성에 따른 자료 조사 진행</p>
          <img src={ghbe01} alt="benchmark concept one is matching 1:1"/>
          <img src={ghbe02} alt="benchmark concept two is creating new immersive deepneess"/>
          <h3>Offline flagship store analysis</h3>
          <p>오프라인 매장 콘텐츠 중 신규 페이지에 탑재할 콘텐츠를 선별하기 위해 분석 진행</p>
          <img src={ghstore} alt="simple floor map of galaxy harajuku flagship store"/>
          </div>


          
    </div>
    </div>
  </Layout>
    
)


export default GalaxyHarajukuPage