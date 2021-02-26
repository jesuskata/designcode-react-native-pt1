// Dependencies
import React, { useEffect/* , useRef */ } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StatusBar, ScrollView } from 'react-native';
// import { WebView } from 'react-native-webview';
import Markdown from 'react-native-showdown';
import { Ionicons } from '@expo/vector-icons';

// Styled Components
import {
  Container, Cover, Image, Title, Caption, CloseView, Wrapper, Logo, Subtitle, Content
} from './styles';

export const SectionScreen = ({ navigation }) => {
  const htmlStyles = `
    * {
      background-color: #f0f3f5;
      font-family: -apple-system;
      margin: 0;
      padding: 0;
      font-size: 17px;
      font-weight: normal;
      color: #3c4560;
      line-height: 24px;
    }

    img {
      width: 100%;
      margin-top: 20px;
      border-radius: 10px;
    }

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      color: #b8bece;
      font-weight: 600;
      margin-top: 50px;
    }

    p {
      margin-top: 20px;
    }

    a {
      color: #4775f2;
      font-weight: 600;
      text-decoration: none;
    }

    strong {
      font-weight: 700;
    }

    pre {
      padding: 20px;
      background: #212C4F;
      overflow: hidden;
      word-wrap: break-word;
      border-radius: 10px;
      margin-top: 20px;
    }

    pre code {
      color: white;
      background-color: transparent;
    }
  `;

  const section = navigation.getParam('section');
  // const webViewRef = useRef(null);

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
    // Effect for componentWillUnmount
    return function cleanUp() {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  const handleCloseSection = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          style={{ position: 'absolute', top: 20, right: 20 }}
          onPress={handleCloseSection}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#4775f2"
              style={{ marginTop: -1 }}
            />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {/* <WebView
            source={{ html: section.content + htmlStyles }}
            scalesPageToFit={false}
            scrollEnabled={false}
            ref={webViewRef}
            onNavigationStateChange={event => {
              console.log(event);
              if (event.url !== 'about:blank') {
                webViewRef.current.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          /> */}
          <Markdown
            body={section.content}
            pureCSS={htmlStyles}
            scalesPageToFit={false}
            // scrollEnabled={false}
          />
        </Content>
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
      </Container>
    </ScrollView>
  );
};

SectionScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};
