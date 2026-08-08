import { UserProfile } from '../components/member/UserProfile'

export default function About() {
  return (
    <>
      <h3>유저 프로필</h3>
        <p>(interface 프롭스)</p>
        <UserProfile 
          name="김명교"
          age={43}
          job="웹퍼블리셔"
          skills="react, vue, javascript, typescript, html, css, scss, git, api"
          email="myoung_kyo@hanmail.net"
          notes="jsp, asp, php"/>
    </>
  );
}