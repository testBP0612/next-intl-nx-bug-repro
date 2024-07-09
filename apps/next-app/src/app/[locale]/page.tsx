import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>{t('title')}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
