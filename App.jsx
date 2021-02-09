// Dependencies
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';

// Components
import { Card } from './src/components/Card';
import { Logo } from './src/components/Logo';
import { TopBar } from './src/components/TopBar';

// Styled Components
import { Container, Subtitle } from './styles';

// Data
import { logos, cards, courses } from './src/data';
import { Course } from './src/components/Course';

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TopBar />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
          >
            {logos.map(logo => (
              <Logo
                key={logo.image}
                image={logo.image}
                text={logo.text}
              />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView horizontal style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
            {cards.map(card => (
              <Card
                key={card.image}
                image={card.image}
                title={card.title}
                logo={card.logo}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses</Subtitle>
          <ScrollView>
            {courses.map(course => (
              <Course
                image={course.image}
                logo={course.logo}
                subtitle={course.subtitle}
                title={course.title}
                avatar={course.avatar}
                caption={course.caption}
                author={course.author}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}
