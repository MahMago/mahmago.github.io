import Layout from '../../components/layout';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

export default function Glassdoor() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <Image
          src="/images/work/clapperboard_glassdoor.svg"
          alt="Clapperboard"
          width={700}
          height={602}
        />
      </section>
    </Layout>
  );
}
