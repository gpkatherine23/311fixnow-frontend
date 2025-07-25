import { Metadata } from 'next';
import HomeContent from './home-content';

export const metadata: Metadata = {
  title: '311 Miami-Dade Predict Resolution Time',
  description: '311 Miami-Dade County Prediction empowers residents and officials by providing predictive insights into how long common service requests are likely to take— based on real county data. Know what to expect before you submit.',
  keywords: '311, Miami Dade, Prediction',
};

export default function HomePage() {
  return <HomeContent />;
}
