import * as React from "react";
import { get, quotesEndpoint } from "../apiHelper";
import { Segment, Text, Flex, Button } from "@fluentui/react-northstar";
import { Quote } from "../models/Quote";
import "../App.css";
import { getRandomColor, getRandomColorV2 } from "../ColorPallets";
import { IndexedDbExample } from "../IndexedDb/indexedDbUseCases";

interface RandomQuotesProps {
  isDarkTheme: boolean;
}
export const RandomQuotes: React.FunctionComponent<RandomQuotesProps> =
  React.memo((p) => {
    const [randomQuote, setRandomQuote] = React.useState({
      author: "",
      quote: "",
    });
    const [randomColor, setRandomColor] = React.useState(getRandomColorV2());
    const [quotesLibrary, setQuotes] = React.useState([]);
    const { isDarkTheme } = p;
    React.useEffect(() => {
      get(quotesEndpoint).then((res: any) => {
        const temp = res.data.quotes;
        getRandomQuotes(temp);
        setQuotes(temp);
      });
    }, []);
    const getRandomQuotes = (quotes: Quote[]) => {
      const randomNumber = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomNumber]);
    };
    const handleClick = () => {
      getRandomQuotes(quotesLibrary);
      setRandomColor(getRandomColor());
    };
    const primaryButtonStyle = () => {
      const styleObj = {
        backgroundColor: isDarkTheme ? "transparent" : "#fff",
        color: isDarkTheme ? "#a6a7dc" : "#6264a7",
      };
      return {
        backgroundColor: randomColor,
        ":hover": styleObj,
        ":active": styleObj,
      };
    };
    const tweetUrl =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=kamranafsar&text=" +
      encodeURIComponent('"' + randomQuote.quote + '" ' + randomQuote.author);
    return (
      <Segment className="main-segment quote-box" key="segment-quote">
        <Flex padding="padding.medium" gap="gap.medium" key="flex-segment-1">
          <Text
            key={randomQuote.quote.substring(10)}
            content={randomQuote.quote}
            size="large"
            weight="bold"
            styles={{ color: randomColor }}
          />
        </Flex>
        <Flex key="flex-segment-2" padding="padding.medium" gap="gap.medium">
          <Text
            key={randomQuote.author}
            content={`~${randomQuote.author}`}
            styles={{ color: randomColor }}
          />
        </Flex>
        <Flex key="flex-segment-3">
          <Button
            iconOnly
            primary
            onClick={() => window.open(tweetUrl, "_blank")}
            styles={{ backgroundColor: randomColor }}
          >
            <i className="fa fa-twitter" />
          </Button>
          {/* <Button iconOnly primary styles={{ backgroundColor: randomColor }} className="ml-5"><i className="fa fa-tumblr" /></Button> */}
          <Flex.Item push>
            <Button
              primary
              content="New quote"
              onClick={handleClick}
              key="btn-primary"
              styles={primaryButtonStyle}
            />
          </Flex.Item>
        </Flex>
        <IndexedDbExample />
      </Segment>
    );
  });
