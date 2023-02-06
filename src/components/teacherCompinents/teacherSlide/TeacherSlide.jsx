import './TeacherSlide.scss';
import { useTranslation } from 'react-i18next';

const TeacherSlide = () => {
  const { t } = useTranslation();

  return (
    <div
      className='teachersBanner'
      style={{
        background:
          'url("./imgs/teachers/bannerBK.png") no-repeat, linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        backgroundSize: 'cover',
      }}
    >
      <h1> {t('ourTeachers-header')}</h1>
    </div>
  );
};

export default TeacherSlide;
