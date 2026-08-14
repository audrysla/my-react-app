import { UserProfile } from '../components/member/UserProfile'

export default function About() {
  return (
    <>
      <section className="subpage-content">
        <h2>유저 프로필</h2>
        <h3>interface 프롭스</h3>
        <UserProfile 
          name="김명교"
          age={43}
          job="웹퍼블리셔"
          skills="react, vue, javascript, typescript, html, css, scss, git, api"
          email="myoung_kyo@hanmail.net"
          tel="010-2653-3076"
          notes="jsp, asp, php, 운동, 홈트, 축구, 카메라, 자전거, 피아노, 음악감상, 산책, 미혼, 자녀 없음"
        />
      </section>
    </>
  );
}