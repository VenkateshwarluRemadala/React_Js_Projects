import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [schoolsData, setSchoolsData] = useState([])
  const data = 
    {
    "schoolBasicProfileInfo": {
      "id": 28,
      "userIdentity": "652baaf2-3b29-4c12-ac75-f982b464900c",
      "schoolType": 1,
      "schoolCode": "123",
      "schoolName": "narayana",
      "aboutSchool": "true",
      "coverPicturePath": "ef7a175c-e3d7-41bb-b9e6-d90e09bb6e85_CoverPicture.jfif",
      "logoPicturePath": null,
      "address": "Delhi",
      "stateId": 10,
      "cityId": 706,
      "pincode": 565435,
      "landmark": "Near to jalahalli",
      "website": "https://www.amazon.com/",
      "phoneOne": "3456789034",
      "phoneTwo": "1234567890",
      "phoneThree": null,
      "landline": "34677884567",
      "emailOne": "madhu@1234.com",
      "emailTwo": null,
      "gradeFrom": 8,
      "gradeTo": 8,
      "isPUCollege": false,
      "boardOne": 2,
      "boardTwo": 3,
      "boardThree": 1,
      "establishmentYear": 2001,
      "schoolAffiliationStatus": false,
      "schoolAffiliationGrantYear": 2012,
      "registeredName": "Navkis",
      "schoolClassification": 3,
      "languageOfInstruction": 1,
      "languageTaughtAtPrimaryStage": 1,
      "subjectsForTenth": "English,Kannada",
      "subjectsForTwelveth": "English,Hindi,Kannada",
      "creationDate": "2022-09-23T18:17:28",
      "updationDate": "2022-10-10T14:22:02.1520469",
      "isActive": true,
      "socials": null,
      "razorpayAccount": null,
      "schoolLocation": "LANCO HILLS, Hyderabad, Telangana",
      "latitude": 17.4102796,
      "longitude": 78.3760455,
      "preSchoolType": 0,
      "locationId": 0,
      "majorAreaId": 0,
      "videoOne": null,
      "videoTwo": null,
      "schoolMetaTitle": null,
      "schoolUrl": null,
      "schoolMetaDescription": null,
      "canonicalTag": null,
      "h1TagData": null,
      "brochurePath": null,
      "showLatestUpdate": false
    },
    "schoolAdditionalInfo": {
      "additionalInfoId": 24,
      "minimumEntryAge": 5,
      "minimumEntryAgeForBoardingSchool": 12,
      "isReligiousMinoritySchool": false,
      "totalSeatsAtEntryLevelGrade": null,
      "totalSchoolStrength": 200,
      "averageStudentsPerClass": 40,
      "studentsRatio": "40",
      "teachersRatio": "2",
      "totalTeachers": null,
      "totalPGT": null,
      "totalTGT": null,
      "totalPRT": null,
      "totalPET": null,
      "totalNonTeachingStaff": null,
      "schoolVision": null,
      "chairmanProfile": null,
      "chairmanPhoto": null,
      "chairmanPhotoPath": null,
      "principalName": null,
      "principalPhone": null,
      "principalEmail": null,
      "principalRetirementDate": "2022-10-27T00:00:00",
      "principalProfile": null,
      "principalPhoto": null,
      "youtubeVideoOne": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "youtubeVideoTwo": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "youtubeVideoThree": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "youtubeVideoFour": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "principalPhotoPath": null,
      "keyDifferentiator1": "values",
      "keyDifferentiator2": "goal",
      "keyDifferentiator3": "testing",
      "keyDifferentiator4": "morals",
      "keyDifferentiator5": "trust",
      "keyDifferentiator6": "abc",
      "keyDifferentiator7": "believe",
      "keyDifferentiator8": "testing",
      "schoolBasicProfileId": 28,
      "schoolBasicProfile": null
    },
    "schoolAdmissionProcess": {
      "admissionProcessId": 23,
      "processDescription": null,
      "startDate": "2022-10-27T00:00:00",
      "isApplyOnline": true,
      "isAdmissionOpen": true,
      "admissionPageUrl": "https://www.youtube.com/watch?v=bjW_5sqB_j0",
      "latestUpdates": null,
      "schoolBasicProfileId": 28,
      "schoolBasicProfile": null
    },
    "schoolFalilities": {
      "facilitiesId": 35,
      "hasTransportationFacility": true,
      "doesProvideMeals": false,
      "hasAcClassrooms": true,
      "hasDayBoardingFacility": true,
      "hasCCTVSurveillance": true,
      "classroomPictures": null,
      "outdoorSportsPictures": null,
      "indoorSportsPictures": null,
      "coCurricularActivitiesPictures": null,
      "buildingInfrastructureDescription": "yes",
      "buildingInfrastructurePictures": null,
      "safetySecurityHygieneDescription": "true",
      "safetySecurityHygienePictures": null,
      "hasRainWaterHarvesting": false,
      "hasRoofWaterHarvesting": false,
      "isHarvestedWaterRecycled": false,
      "hasFireExtinguishers": false,
      "isExaminationCenterOfCBSE": false,
      "hasClinicFacility": false,
      "hasBarrierFreeRamps": false,
      "hasStrongRoom": false,
      "hasGymnasium": false,
      "isWifiEnabled": false,
      "hasRampsForDifferentlyAbled": false,
      "totalAreaOfSchool": 0,
      "totalPlaygrounds": 0,
      "totalAreaOfPlayground": 0,
      "totalRooms": 0,
      "totalLibraries": 0,
      "totalLaboratories": 0,
      "totalAuditoriums": 0,
      "totalElevators": 0,
      "totalDigitalClassrooms": 0,
      "totalComputers": 0,
      "totalBuses": 0,
      "totalActivityRooms": 0,
      "schoolExchangeProgramDescription": "yes",
      "schoolExchangeProgramPictures": null,
      "distinguishedAlumniDescription": null,
      "distinguishedAlumniPictures": null,
      "schoolPictures": null,
      "outdoorCricket": true,
      "outdoorBadminton": true,
      "outdoorFootball": true,
      "outdoorHockey": true,
      "outdoorBasketball": true,
      "outdoorKabaddi": true,
      "outdoorKhoKho": true,
      "outdoorTennis": true,
      "outdoorRugby": true,
      "outdoorThrowball": true,
      "outdoorVolleyball": true,
      "outdoorHorseRiding": true,
      "outdoorSkating": true,
      "outdoorArchery": true,
      "outdoorShooting": true,
      "outdoorCycling": true,
      "outdoorKarate": true,
      "outdoorRunning": true,
      "outdoorAthletics": true,
      "indoorSwimming": true,
      "indoorBadminton": true,
      "indoorChess": true,
      "indoorCarrom": true,
      "indoorTableTennis": true,
      "indoorTaeKawonDo": true,
      "indoorMarshalArts": true,
      "indoorGymnastics": true,
      "indoorWeightLifting": true,
      "indoorWrestling": true,
      "indoorBilliards": false,
      "indoorBoxing": true,
      "indoorKickBoxing": true,
      "coCurricularDancing": true,
      "coCurricularSinging": true,
      "coCurricularMusic": true,
      "coCurricularArts": true,
      "coCurricularCraft": true,
      "coCurricularTheatre": true,
      "coCurricularPhotography": true,
      "coCurricularPublicSpeaking": true,
      "coCurricularEassyWriting": true,
      "coCurricularLifeSkills": true,
      "coCurricularInstrumentalMusic": true,
      "coCurricularAbacus": true,
      "coCurricularYoga": true,
      "coCurricularPlantation": true,
      "coCurricularAgriculture": true,
      "coCurricularForest": true,
      "schoolBasicProfileId": 28,
      "schoolBasicProfile": null
    },
    "schoolFeeDetails": {
      "feeDetailsId": 19,
      "tuitionFees": 2,
      "applicationFeesDaySchool": 500,
      "tuitonFeesForBoardingSchool": 7,
      "applicationFeesBoardingSchool": 1000,
      "isOnlinePayment": true,
      "schoolBasicProfileId": 28,
      "schoolBasicProfile": null
    },
    "schoolSocialInfo": {
      "socialsId": 18,
      "facebook": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "twitter": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "linkedIn": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "instagram": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "youtube": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "medium": "https://www.youtube.com/watch?v=Fv9txrVpr-0",
      "schoolBasicProfileId": 28,
      "schoolBasicProfile": null
    }
  };
  let arr = [];
  let value;
  for(let i in data){
     value  = data[i]
       arr.push(value)
  }
  
  //  console.log(arr);
//setSchoolsData(data);

  return (
    <div className="App">
     {
      arr.map((item)=>{
        return(
          <div  >
         <p>{item.id}</p>
        
         <p>{item.minimumEntryAgeForBoardingSchool}</p>
        </div>
        )
        
        
      })
     }
    </div>
  );
}

export default App;
