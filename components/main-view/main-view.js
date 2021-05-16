import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import axios from 'axios';

const Main = () => {
  const [questions, setQuestions] = useState([]);
  const initialState = {question: '', answer: ''};
  const [question, setQuestion] = useState(initialState);

  const [focusInput, setFocusInput] = useState('#7e7e7e');

  const truncate = input =>
    input.length > 100 ? (
      <View className="truncate-text-container">
        <Text>{input.substring(0, 100)} . . .</Text>
        <Text>click to see the question</Text>
      </View>
    ) : (
      input
    );

  const onFocusInput = () => {
    setFocusInput('#272727');
  };

  const handleChange = text => {
    setQuestion({...question, text});
  };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   if (!question.question) {
  //     return;
  //   }

  //   const postQuestion = async () => {
  //     try {
  //       await axios.post('/api/questions', question);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   postQuestion();
  //   window.location.reload(false);
  // };

  // useEffect(() => {
  //   const getQuestions = async () => {
  //     try {
  //       const response = await axios.get("/api/questions");
  //       setQuestions(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getQuestions();

  //   if (detect) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [detect]);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Questions <Text style={styles.smallText}>and</Text> Answers
            </Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.smallText}>
              On this platform you can ask <Text>anything</Text> and get
              responses without being <Text>ashamed </Text>
              of the question because anything it's <Text>anonymized! </Text>
              Enjoy!
            </Text>
          </View>
          <View style={styles.addQuestionContainer}>
            <Text style={styles.addQuestionText}>Create a Question: </Text>
            <TextInput
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                borderRadius: 8,
                padding: 11,
                borderWidth: 2,
                borderColor: focusInput,
              }}
              onChangeText={text => handleChange(text)}
              value={question.question}
              placeholder="add a question!"
              onFocus={onFocusInput}
              //onSubmitEditing={handleSubmit}
            />
            <View style={styles.submitQuestion}>
              <Button
                style={styles.submitQuestionButton}
                title="Add"
                onPress={() => Alert.alert('add a question button is pressed')}
              />
            </View>
          </View>
          <View>
            {questions.map(q => {
              return (
                <View
                  key={q._id}
                  //to={q.answer === '' ? `/${q._id}/edit` : `/${q._id}`}
                >
                  <View className="question-container">
                    <View className="question">
                      <Text>Q: </Text>
                      {truncate(q.question)}
                    </View>
                    <View className="answer">
                      <Text>A: </Text>
                      {q.answer === '' ? (
                        <Text className="add-answer">
                          Open to add an answer
                        </Text>
                      ) : (
                        truncate(q.answer)
                      )}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: 'Roboto',
    marginTop: 15,
    marginHorizontal: 15,
    display: 'flex',
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#239eee35',
    borderRadius: 10,
    flex: 1,
  },
  title: {
    width: 300,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  smallContainer: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
  addQuestionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addQuestionText: {
    fontSize: 18,
  },
  submitQuestion: {
    backgroundColor: '#ff9900',
  },
  submitQuestionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    borderWidth: 2,
  },
});

export default Main;
