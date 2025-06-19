function calculateTax(income, expenses) {

    if (income  0  expenses  0  income  expenses) {
    
    return Invalid Input;
    
    }
    
    const netIncome = income - expenses;
    
    const taxAmount = netIncome  0.20;
    
    
    return taxAmount;
    
    }
    
    function sendNotification(email) {
    
    const atIndex = email.indexOf('@');
    
    if (atIndex === -1) {
    
    return Invalid Email;
    
    }
    
    const username = email.substring(0, atIndex);
    
    const domain = email.substring(atIndex + 1);
    
    const notificationMessage = `${username} sent you an email from ${domain}`;
    
    
    return notificationMessage;
    
    }
    
    function checkDigitsInName(name) {
    
    if (typeof name !== 'string') {
    
    return 'Invalid Input';
    
    }
    
    const regex = d;
    
    
    return regex.test(name);
    
    }
    
    function calculateFinalScore(obj) {
    
    const maxTestScore = 50;
    
    const maxSchoolGrade = 30;
    
    const bonusForFFamily = 20;
    
    if (typeof obj !== object  !obj.hasOwnProperty(name)  !obj.hasOwnProperty(testScore)  !obj.hasOwnProperty(schoolGrade)  !obj.hasOwnProperty(isFFamily)) {
    
    return Invalid Input;
    
    }
    
    if (obj.testScore  maxTestScore  obj.schoolGrade  maxSchoolGrade  obj.testScore  0  obj.schoolGrade  0) {
    
    return Invalid input;
    
    }
    
    let finalScore = obj.testScore + obj.schoolGrade;
    
    if (obj.isFFamily) {
    
    finalScore += bonusForFFamily;
    
    }
    
    if (finalScore = 80) {
    
    return true;
    
    } else {
    
    return false;
    
    }
    
    }
    
    function waitingTime(waitingTimes, serialNumber) {
    
    const totalInterviews = waitingTimes.length;
    
    const interviewsBeforeIsrat = serialNumber - 1;
    
    const remainingInterviews = interviewsBeforeIsrat - totalInterviews;
    
    if (remainingInterviews = 0) {
    
    return 0;
    
    }
    
    const averageInterviewTime = waitingTimes.reduce((total, time) = total + time, 0)  totalInterviews;
    
    const waitingTime = remainingInterviews  averageInterviewTime;
    
    
    const hours = Math.floor(waitingTime  60);
    
    const remainingMinutes =Math.round(waitingTime % 60);
    
    return `${hours} ঘণ্টা এবং ${remainingMinutes} মিনিট`;
    
    }