import { ContentLayout, MainLayout } from '@/components/Layout';

export const AboutMe = () => {
  return (
    <MainLayout>
      <ContentLayout title="About me">
        <div className="mt-24">
          <h4 className="text-4xl">
            “It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            normal distribution.” – Jarad Spool
          </h4>
        </div>

        <div className="mt-24">
          <h4 className="text-4xl">
            “It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has
            normal distribution.” – Jarad Spool
          </h4>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">Education</h3>
          <div className="mt-14"></div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">Experience</h3>
          <div className="mt-14"></div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">Selected clients</h3>
          <div className="mt-14"></div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">Awards & recognition</h3>
          <div className="mt-14"></div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl">Curriculum vitae</h3>
          <div className="mt-14"></div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
