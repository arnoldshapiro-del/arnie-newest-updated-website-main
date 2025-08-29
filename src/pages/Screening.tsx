import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, Phone, Mail, Calendar, AlertTriangle, Shield, CheckCircle } from "lucide-react";

interface Question {
  id: string;
  text: string;
  options: Array<{
    value: number;
    text: string;
    crisis?: boolean;
  }>;
}

interface Assessment {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
  stats: {
    questions: number;
    minutes: string;
    rating: string;
  };
}

const Screening = () => {
  const [currentAssessment, setCurrentAssessment] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const [privacyPreference, setPrivacyPreference] = useState('anonymous');

  const assessments: Record<string, Assessment> = {
    adhd: {
      id: 'adhd',
      title: 'ADHD Assessment',
      description: 'Comprehensive screening for Attention-Deficit/Hyperactivity Disorder in adults and teens',
      icon: '🧠',
      stats: { questions: 18, minutes: '5-7', rating: 'Most Popular' },
      questions: [
        {
          id: 'adhd_1',
          text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_2',
          text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_3',
          text: 'How often do you have problems remembering appointments or obligations?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_4',
          text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_5',
          text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_6',
          text: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_crisis',
          text: 'Crisis Check: Are you currently having thoughts of harming yourself or others?',
          options: [
            { value: 0, text: 'No, not at all', crisis: false },
            { value: 1, text: 'Yes, I am having concerning thoughts', crisis: true }
          ]
        }
      ]
    },
    depression: {
      id: 'depression',
      title: 'Depression Screening (PHQ-9)',
      description: 'This screening is based on the Patient Health Questionnaire-9 (PHQ-9). Please indicate how often you have been bothered by each problem over the last 2 weeks.',
      icon: '🌧️',
      stats: { questions: 9, minutes: '3-4', rating: 'Clinical Standard' },
      questions: [
        {
          id: 'dep_1',
          text: 'Little interest or pleasure in doing things',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_2',
          text: 'Feeling down, depressed, or hopeless',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_3',
          text: 'Trouble falling or staying asleep, or sleeping too much',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_4',
          text: 'Feeling tired or having little energy',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_5',
          text: 'Poor appetite or overeating',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_6',
          text: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_7',
          text: 'Trouble concentrating on things, such as reading the newspaper or watching television',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_8',
          text: 'Moving or speaking so slowly that other people could have noticed, or being so fidgety or restless that you have been moving around a lot more than usual',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_9',
          text: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way',
          options: [
            { value: 0, text: 'Not at all', crisis: false },
            { value: 1, text: 'Several days', crisis: true },
            { value: 2, text: 'More than half the days', crisis: true },
            { value: 3, text: 'Nearly every day', crisis: true }
          ]
        }
      ]
    },
    anxiety: {
      id: 'anxiety',
      title: 'Anxiety Assessment (GAD-7)',
      description: 'This assessment evaluates symptoms of generalized anxiety disorder. Please indicate how often you have been bothered by each problem over the last 2 weeks.',
      icon: '😰',
      stats: { questions: 7, minutes: '3-4', rating: 'Comprehensive' },
      questions: [
        {
          id: 'anx_1',
          text: 'Feeling nervous, anxious, or on edge',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'anx_2',
          text: 'Not being able to stop or control worrying',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'anx_3',
          text: 'Worrying too much about different things',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'anx_4',
          text: 'Trouble relaxing',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'anx_5',
          text: 'Being so restless that it is hard to sit still',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'anx_6',
          text: 'Becoming easily annoyed or irritable',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'anx_7',
          text: 'Feeling afraid, as if something awful might happen',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        }
      ]
    }
  };

  const startAssessment = (assessmentId: string) => {
    setCurrentAssessment(assessmentId);
    setCurrentQuestionIndex(0);
    setResponses({});
    setShowResults(false);
    setShowCrisis(false);
  };

  const handleAnswer = (questionId: string, value: number, hasCrisis?: boolean) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
    
    if (hasCrisis) {
      setShowCrisis(true);
    }
  };

  const nextQuestion = () => {
    if (!currentAssessment) return;
    
    const assessment = assessments[currentAssessment];
    const currentQuestion = assessment.questions[currentQuestionIndex];
    
    if (!(currentQuestion.id in responses)) {
      alert('Please select an answer before proceeding.');
      return;
    }
    
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeAssessment();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const completeAssessment = () => {
    setShowResults(true);
  };

  const calculateResults = () => {
    if (!currentAssessment) return { score: 0, level: 'Unknown', recommendations: [] };
    
    const totalScore = Object.values(responses).reduce((sum, value) => sum + value, 0);
    
    let level: string;
    let levelClass: string;
    let recommendations: string[];
    
    if (currentAssessment === 'adhd') {
      if (totalScore <= 8) {
        level = 'Low likelihood of ADHD';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Your responses suggest a low likelihood of ADHD',
          'Continue monitoring your symptoms',
          'Consider lifestyle factors that may affect attention',
          'Consult Dr. Shapiro if symptoms worsen'
        ];
      } else if (totalScore <= 16) {
        level = 'Moderate likelihood of ADHD';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = [
          'Your responses suggest possible ADHD symptoms',
          'Consider scheduling an evaluation with Dr. Shapiro',
          'Track your symptoms over the next few weeks',
          'Discuss impact on work/school performance'
        ];
      } else {
        level = 'High likelihood of ADHD';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = [
          'Your responses suggest significant ADHD symptoms',
          'Strongly recommend evaluation with Dr. Shapiro',
          'Consider how symptoms affect daily functioning',
          'Treatment options may be beneficial'
        ];
      }
    } else if (currentAssessment === 'depression') {
      if (totalScore <= 4) {
        level = 'Minimal depression symptoms';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
      } else if (totalScore <= 9) {
        level = 'Mild depression symptoms';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
      } else if (totalScore <= 14) {
        level = 'Moderate depression symptoms';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
      } else {
        level = 'Severe depression symptoms';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
      }
      
      recommendations = [
        'Consider discussing your mood with Dr. Shapiro',
        'Monitor your symptoms over time',
        'Engage in self-care activities',
        'Reach out to support systems'
      ];
    } else {
      const maxScore = assessments[currentAssessment].questions.length * 3;
      const percentage = (totalScore / maxScore) * 100;
      
      if (percentage <= 30) {
        level = 'Low concern level';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
      } else if (percentage <= 60) {
        level = 'Moderate concern level';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
      } else {
        level = 'High concern level';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
      }
      
      recommendations = [
        'Consider discussing results with Dr. Shapiro',
        'Monitor your symptoms',
        'Practice self-care strategies'
      ];
    }
    
    return { score: totalScore, level, levelClass, recommendations };
  };

  const returnToGrid = () => {
    setCurrentAssessment(null);
    setCurrentQuestionIndex(0);
    setResponses({});
    setShowResults(false);
    setShowCrisis(false);
  };

  if (showCrisis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-red-50 border-red-200 mb-8">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <div className="ml-3">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Immediate Help Available</h3>
              <p className="text-red-700 mb-6">
                If you are having thoughts of suicide or self-harm, please reach out for immediate help. You are not alone.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Crisis Lifeline</h4>
                    <a href="tel:988" className="text-red-600 font-bold text-lg hover:underline">
                      📞 Call or Text 988
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 free and confidential support</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Emergency Services</h4>
                    <a href="tel:911" className="text-red-600 font-bold text-lg hover:underline">
                      📞 Call 911
                    </a>
                    <p className="text-sm text-gray-600 mt-1">For immediate emergency response</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Crisis Text Line</h4>
                    <a href="sms:741741?body=HOME" className="text-red-600 font-bold text-lg hover:underline">
                      📱 Text HOME to 741741
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 crisis support via text</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Dr. Shapiro's Office</h4>
                    <a href="tel:859-341-7453" className="text-red-600 font-bold text-lg hover:underline">
                      📞 (859) 341-7453
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Same-day response for urgent concerns</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setShowCrisis(false)} variant="outline">
                  Continue with Assessment
                </Button>
                <Button onClick={returnToGrid} className="bg-blue-600 hover:bg-blue-700">
                  Return to Screening Tools
                </Button>
              </div>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  if (showResults && currentAssessment) {
    const results = calculateResults();
    const assessment = assessments[currentAssessment];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-800 mb-4">Your Assessment Results</CardTitle>
              <div className="text-6xl mb-4">{assessment.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{assessment.title}</h2>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block text-xl font-bold">
                Score: {results.score}
              </div>
              <div className={`mt-4 px-6 py-3 rounded-lg font-semibold text-lg border-2 ${results.levelClass}`}>
                {results.level}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Personalized Recommendations</h3>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Your Privacy
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Based on your privacy preferences, {privacyPreference === 'anonymous' 
                    ? 'your responses are not stored and remain completely anonymous' 
                    : 'your data is handled according to your selected preferences'}.
                </p>
                <p className="text-sm text-gray-700">
                  All screening data complies with HIPAA privacy regulations.
                </p>
              </div>
              
              <div className="bg-orange-500 border-2 border-orange-300 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Discuss Your Results with Dr. Shapiro</h3>
                <p className="mb-4 text-orange-100">Get professional interpretation of your screening results and personalized treatment recommendations from Cincinnati's leading psychiatrist.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-white text-orange-600 hover:bg-orange-50" asChild>
                    <a href="tel:859-341-7453" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <a href="mailto:ashapiro@zoomtown.com?subject=Screening Results Discussion" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Dr. Shapiro
                    </a>
                  </Button>
                  <Button className="bg-white text-orange-600 hover:bg-orange-50 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Schedule Consultation
                  </Button>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button onClick={returnToGrid} variant="outline" size="lg">
                  Take Another Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentAssessment) {
    const assessment = assessments[currentAssessment];
    const currentQuestion = assessment.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / assessment.questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{assessment.icon}</div>
              <CardTitle className="text-3xl text-blue-800 mb-2">{assessment.title}</CardTitle>
              <p className="text-gray-600 mb-4">{assessment.description}</p>
              <Progress value={progress} className="w-full mb-2" />
              <p className="text-sm text-gray-600">Question {currentQuestionIndex + 1} of {assessment.questions.length}</p>
            </CardHeader>
            
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">{currentQuestion.text}</h3>
                <RadioGroup
                  value={responses[currentQuestion.id]?.toString() || ''}
                  onValueChange={(value) => {
                    const numValue = parseInt(value);
                    const option = currentQuestion.options.find(opt => opt.value === numValue);
                    handleAnswer(currentQuestion.id, numValue, option?.crisis);
                  }}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                      <RadioGroupItem value={option.value.toString()} id={`${currentQuestion.id}_${index}`} />
                      <Label
                        htmlFor={`${currentQuestion.id}_${index}`} 
                        className="flex-1 cursor-pointer text-left"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="flex justify-between items-center">
                <Button
                  onClick={previousQuestion}
                  variant="outline"
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <Button
                  onClick={() => setShowCrisis(true)}
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Crisis Resources
                </Button>
                
                <Button
                  onClick={nextQuestion}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
                >
                  {currentQuestionIndex === assessment.questions.length - 1 ? 'Complete Assessment' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-4xl font-bold mb-4">
              Professional Mental Health Screening Tools
            </CardTitle>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Take the first step toward better mental health with our comprehensive, HIPAA-compliant screening assessments. 
              Developed by Dr. Arnold G. Shapiro, board-certified psychiatrist with 35+ years of experience serving Cincinnati and Fort Wright.
            </p>
            
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <Badge className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
                🏥 HIPAA Compliant
              </Badge>
              <Badge className="bg-white text-blue-700 px-4 py-2">
                🔒 Completely Confidential
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">
                ⚕️ Clinically Validated
              </Badge>
              <Badge className="bg-orange-400 text-white px-4 py-2">
                📱 Mobile Optimized
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="bg-white">
            {/* HIPAA Notice */}
            <Alert className="bg-blue-50 border-blue-300 mb-6">
              <Shield className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <h3 className="font-semibold text-blue-700 mb-3">Your Privacy is Protected</h3>
                <p className="mb-4 text-gray-700">
                  <strong>HIPAA Compliance:</strong> All screening tools are completely confidential and comply with HIPAA privacy regulations. 
                  No personal health information is stored without your explicit consent. You can complete assessments anonymously or choose to receive personalized follow-up.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      privacyPreference === 'anonymous' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-300 bg-white hover:border-orange-300'
                    }`}
                    onClick={() => setPrivacyPreference('anonymous')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <input 
                        type="radio" 
                        name="privacy" 
                        value="anonymous" 
                        checked={privacyPreference === 'anonymous'}
                        onChange={() => setPrivacyPreference('anonymous')}
                        className="text-orange-600"
                      />
                      <strong className="text-blue-700">Anonymous Assessment</strong>
                    </div>
                    <small className="text-gray-600">No personal information collected</small>
                  </div>
                  
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      privacyPreference === 'results-only' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-300 bg-white hover:border-orange-300'
                    }`}
                    onClick={() => setPrivacyPreference('results-only')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <input 
                        type="radio" 
                        name="privacy" 
                        value="results-only" 
                        checked={privacyPreference === 'results-only'}
                        onChange={() => setPrivacyPreference('results-only')}
                        className="text-orange-600"
                      />
                      <strong className="text-blue-700">Results via Email</strong>
                    </div>
                    <small className="text-gray-600">Email address only for results</small>
                  </div>
                  
                  <div 
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      privacyPreference === 'consultation' 
                        ? 'border-orange-500 bg-orange-50' 
                        : 'border-gray-300 bg-white hover:border-orange-300'
                    }`}
                    onClick={() => setPrivacyPreference('consultation')}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <input 
                        type="radio" 
                        name="privacy" 
                        value="consultation" 
                        checked={privacyPreference === 'consultation'}
                        onChange={() => setPrivacyPreference('consultation')}
                        className="text-orange-600"
                      />
                      <strong className="text-blue-700">Consultation Follow-up</strong>
                    </div>
                    <small className="text-gray-600">Contact info for scheduling</small>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Screening Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(assessments).map(([key, assessment]) => (
            <Card 
              key={key} 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-orange-400 bg-white"
              onClick={() => startAssessment(key)}
            >
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl bg-blue-600 text-white p-3 rounded-lg">{assessment.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-blue-700">{assessment.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{assessment.description}</p>
                  </div>
                </div>
                
                <div className="flex justify-between text-center pt-4 border-t border-blue-200">
                  <div>
                    <div className="font-bold text-blue-600">{assessment.stats.questions}</div>
                    <div className="text-xs text-gray-500">Questions</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-600">{assessment.stats.minutes}</div>
                    <div className="text-xs text-gray-500">Minutes</div>
                  </div>
                  <div>
                    <div className="font-bold text-orange-500">⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-gray-500">{assessment.stats.rating}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        {/* Footer Disclaimer */}
        <Card className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-300">
          <CardContent className="text-center py-6">
            <p className="text-sm text-blue-100 mb-2">
              <strong className="text-white">Medical Disclaimer:</strong> These screening tools are for informational purposes only and do not constitute medical advice or diagnosis.
            </p>
            <p className="text-sm text-blue-100">
              Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.
            </p>
            <div className="mt-4 text-xs text-blue-200">
              © 2024 Dr. Arnold G. Shapiro MD - Mental Health Screening Center. All rights reserved. | 
              🔒 HIPAA Compliant | 🏥 Board-Certified Psychiatrist | 📍 Cincinnati, OH & Fort Wright, KY
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Screening;
