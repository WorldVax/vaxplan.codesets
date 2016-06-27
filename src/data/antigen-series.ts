/**
@overview  Support data
@author Dennis Dunn <ansofive@gmail.com>
@license MIT
 */

module.exports = [{
	"Name" : "Diphtheria",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Diphtheria Standard Series",
			"TargetDisease" : "Diphtheria",
			"VaccineGroup" : "DTaP/Tdap/Td",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks – 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 Years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks – 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 Years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "13 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 months",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "4 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "15 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months – 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 5,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "4 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years",
						"AbsoluteMinimumAge" : "4 years – 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 6,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : 1,
						"TotalCoundOfValidDoses" : 2,
						"FirstDoseBeginDate" : "0 days",
						"FirstDoseEndDate" : "1 year",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 7,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 8,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 9,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "Yes",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "10 years",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "2 years",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "5 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP",
				"CvxCode" : 20,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Infanrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP, 5 pertussis antigens",
				"CvxCode" : 106,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Daptacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hep B-IPV",
				"CvxCode" : 110,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pediarix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib-IPV",
				"CvxCode" : 120,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pentacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-IPV",
				"CvxCode" : 130,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Kinrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib",
				"CvxCode" : 50,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTP",
				"CvxCode" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTP-Hib",
				"CvxCode" : 22,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DT",
				"CvxCode" : 28,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Tdap",
				"CvxCode" : 115,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC and SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Td",
				"CvxCode" : 9,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Td p-free",
				"CvxCode" : 113,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Diphtheria Standard Series Summary",
			"Text" : "* This series starts with the standard 5 dose series for children < 7 years old.  It includes the ability to skip the 5th dose if the 4th dose is administered after 4 years.\n* Doses 6, 7, and 8 address adolescent doses of Tdap/Td based on the number of va",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Hep A",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Hep A Standard 2-dose series",
			"TargetDisease" : "Hep A",
			"VaccineGroup" : "Hep A",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "19 years",
							"VaccineType" : {
								"Name" : "Hep A, ped/adol, 2 dose",
								"CvxCode" : 83,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A, Unspecified",
								"CvxCode" : 85,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "19 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A, adult",
								"CvxCode" : 52,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A, ped/adol, 3 dose",
								"CvxCode" : 84,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "19 years",
							"VaccineType" : {
								"Name" : "Hep A, adult",
								"CvxCode" : 52,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "19 years",
							"VaccineType" : {
								"Name" : "Hep A - Hep B",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "24 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "19 years",
							"VaccineType" : {
								"Name" : "Hep A, ped/adol, 2 dose",
								"CvxCode" : 83,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A, Unspecified",
								"CvxCode" : 85,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "19 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A, adult",
								"CvxCode" : 52,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A, ped/adol, 3 dose",
								"CvxCode" : 84,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "19 years",
							"VaccineType" : {
								"Name" : "Hep A, adult",
								"CvxCode" : 52,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "19 years",
							"VaccineType" : {
								"Name" : "Hep A - Hep B",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "19 months + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "18 months",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "18 months - 4 days",
						"MinimumAge" : "18 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Hep A Twinrix 3 dose Series",
			"TargetDisease" : "Hep A",
			"VaccineGroup" : "Hep A",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A - Hep B",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "18 years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "18 years - 4 days",
						"MinimumAge" : "18 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A - Hep B",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep A - Hep B",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "5 months",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "5 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "5 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : ">= 19 years",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Hep A, adult",
				"CvxCode" : 52,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Havrix",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "< 19 years",
			"AllowableAgeRange" : "< 19 years",
			"VaccineType" : {
				"Name" : "Hep A, ped/adol, 2 dose",
				"CvxCode" : 83,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Havrix",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "not preferable",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Hep A, ped/adol, 3 dose",
				"CvxCode" : 84,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "n/a",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : ">= 12 months",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Hep A, Unspecified",
				"CvxCode" : 85,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "n/a",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 18 years",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Hep A - Hep B",
				"CvxCode" : 104,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Twinrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "2-dose series Summary",
			"Text" : "Standard 2-dose series at age 12 months and 18 months.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Twinrix 3-dose series Summary",
			"Text" : "Twinrix specific 3 dose series",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Hep B",
	"StandardSeriesCollection" : [{
			"SeriesName" : "HepB 2-Dose Adolescent Series",
			"TargetDisease" : "HepB",
			"VaccineGroup" : "HepB",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 4,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Recombivax-HB Adult",
								"MvxCode" : "MSD",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "11 years - 4 days",
						"MinimumAge" : "11 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Recombivax-HB Adult",
								"MvxCode" : "MSD",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "5 months + 4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "16 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "3-Dose Primary Series",
			"TargetDisease" : "Hep B",
			"VaccineGroup" : "Hep B",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "20 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "20 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, unspecified formulation",
								"CvxCode" : 45,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adol/high risk infant",
								"CvxCode" : 42,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-HepB",
								"CvxCode" : 102,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B, historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "0 days",
						"LatestRecommendedAge" : "4 weeks",
						"AbsoluteMinimumAge" : "0 days",
						"MinimumAge" : "0 days",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "20 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "20 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, unspecified formulation",
								"CvxCode" : 45,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adol/high risk infant",
								"CvxCode" : 42,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-HepB",
								"CvxCode" : 102,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B, historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "5 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "1 month",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "4 weeks - 4 days",
						"MinimumAge" : "4 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "18 months + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "24 weeks - 4 days",
						"MinimumAge" : "24 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "HepB 4-Dose Series (Comvax)",
			"TargetDisease" : "HepB",
			"VaccineGroup" : "HepB",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 3,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds < 20 years",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, unspecified formulation",
								"CvxCode" : 45,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adult > = 20 years",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/high risk infant < 20 years",
								"CvxCode" : 42,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B, historical",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "0 days",
						"LatestRecommendedAge" : "4 weeks",
						"AbsoluteMinimumAge" : "0 days",
						"MinimumAge" : "0 days",
						"MaximumAge" : "6 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Comvax",
								"MvxCode" : "MSD",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "5 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "6 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Comvax",
								"MvxCode" : "MSD",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "18 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "6 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "N",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "18 months + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "2",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "6 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "HepB 4-Dose Series",
			"TargetDisease" : "HepB",
			"VaccineGroup" : "HepB",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, unspecified formulation",
								"CvxCode" : 45,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, Adol/high risk infant",
								"CvxCode" : 42,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B, historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "0 days",
						"LatestRecommendedAge" : "4 weeks",
						"AbsoluteMinimumAge" : "0 days",
						"MinimumAge" : "0 days",
						"MaximumAge" : "6 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/high risk infant",
								"CvxCode" : 42,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, unspecified formulation",
								"CvxCode" : 45,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B, historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "5 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "6 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/Peds",
								"CvxCode" : 8,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adol/high risk infant",
								"CvxCode" : 42,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, Adult",
								"CvxCode" : 43,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "Hep B, dialysis",
								"CvxCode" : 44,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hep B, unspecified formulation",
								"CvxCode" : 45,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "6 weeks",
							"VaccineTypeEndAge" : "72 months",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "20 years",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-Hep B, historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "18 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "6 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "N",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "18 months + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "2",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "24 weeks",
						"MinimumAge" : "24 weeks",
						"MaximumAge" : "6 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Twinrix 3-Dose Series",
			"TargetDisease" : "HepB",
			"VaccineGroup" : "HepB",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 5,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "18 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HepA-HepB",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "18 years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "18 years",
						"MinimumAge" : "18 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "18 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HepA-HepB",
								"CvxCode" : 104,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : null,
						"LatestRecommendedAge" : null,
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : null,
						"MaximumAge" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "5 months",
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : "5 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "5 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : null,
						"LatestRecommendedAge" : null,
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : null,
						"MaximumAge" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "Immunization Schedule 0-6 years, 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Immunization Schedule 7-18 years, 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs - MMWR / January 28, 2011 / Vol. 60 / No. 2 / Tables 1,2,9 pgs 36-45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Recommendations of the Advisory Committee on Immunization Practices (ACIP \"Pink Book\") - January 28, 2011",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Mapping product names to CVX and MVX",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "2012 Binational Immunization Resource Tool for Children from Birth through 18 Years (http://www.cdc.gov/vaccines/recs/schedules/downloads/child/binational-schedule-pr.pdf )",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "A Comprehensive Immunization Strategy to Eliminate Transmission of Hepatitis B Virus Infection in the United States: Recommendations of the Advisory Committee on Immunization Practices (ACIP) Part 1: Immunization of Infants, Children, and Adolescents - MMWR / December 23, 2005 / Vol. 54 / No. RR-16.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Use of Hepatitis B Vaccination for Adults with Diabetes Mellitus: Recommendations of the Advisory Committee on Immunization Practices (ACIP) – December 23, 2011",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : "Birth to < 20 years",
			"AllowableAgeRange" : ">= Birth",
			"VaccineType" : {
				"Name" : "Hep B, Adol/peds < 20 years",
				"CvxCode" : 8,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Recombivax Peds",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "Birth to < 20 years",
			"AllowableAgeRange" : "Birth to < 20 years",
			"VaccineType" : {
				"Name" : "Hep B, Adol/high risk infant < 20 years",
				"CvxCode" : 42,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 20 years",
			"AllowableAgeRange" : ">= Birth",
			"VaccineType" : {
				"Name" : "Hep B, Adult >= 20 years",
				"CvxCode" : 43,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Recombivax Adult",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= Birth",
			"AllowableAgeRange" : ">= Birth",
			"VaccineType" : {
				"Name" : "Hep B, Dialysis",
				"CvxCode" : 44,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= Birth",
			"AllowableAgeRange" : ">= Birth",
			"VaccineType" : {
				"Name" : "Hep B, Unspecified Formulation",
				"CvxCode" : 45,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 weeks to < 72 months",
			"AllowableAgeRange" : "6 weeks to < 20 years",
			"VaccineType" : {
				"Name" : "Hib-HepB",
				"CvxCode" : 51,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Comvax",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : "Wider evaluation range for this combo vaccine due to HepB component. Note from Pink Book, Chap9, p127: [Comvax] may be used whenever either antigen is indicated and the other antigen is not contraindicated. However, the vaccine must not be administered to",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 weeks to < 72 months",
			"AllowableAgeRange" : "Birth to < 20 years",
			"VaccineType" : {
				"Name" : "DTaP-Hib-HepB",
				"CvxCode" : 102,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : "Wider evaluation range for this combo vaccine due to HepB component.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 18 years",
			"AllowableAgeRange" : ">= 18years",
			"VaccineType" : {
				"Name" : "HepA-HepB",
				"CvxCode" : 104,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Twinrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 weeks to < 7 years",
			"AllowableAgeRange" : "Birth to < 20 years",
			"VaccineType" : {
				"Name" : "DTaP-HepB-IPV",
				"CvxCode" : 110,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pediarix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 weeks to < 72 months",
			"AllowableAgeRange" : "Birth to < 20 years",
			"VaccineType" : {
				"Name" : "DTaP-IPV-Hib-HepB, historical",
				"CvxCode" : 132,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Pending",
			"PreferableAgeRange" : "6 weeks to < 72 months",
			"AllowableAgeRange" : "Birth to < 20 years",
			"VaccineType" : {
				"Name" : "DTaP-IPV-Hib-HepB",
				"CvxCode" : 146,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "3-Dose Primary Series",
			"Text" : "3-Dose Primary Series",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "4-Dose Series",
			"Text" : "The HepB 4-dose series is designed to be compatible with other vaccine group series; the use of combination vaccines often results in an extra (4th) dose of HepB. This series accommodates this without marking the extra HepB dose as being invalid.\n• The preferred, first dose is a monovalent Hep B vaccine; remaining 3 doses are combination vaccines containing a Hep B antigen. \n• Doses 2, 3 and 4 are combination vaccines, which assist in series completion for DTaP, IPV, and Hib without invalidating any HepB shots",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "4-Dose Series (Comvax)",
			"Text" : "The HepB 4-dose (Comvax) series is designed to ensure completion of both HepB and Hib series.It prevents forecast of the Hep B vaccine until 12 months of age so that it can be given with Hib vaccine and complete both series.\n• The preferred, first dose is a monovalent Hep B vaccine; remaining 3 doses are Comvax containing both Hep B and Hib antigens. \n• Ensures that the 4th dose of HepB is not administered until 12 months of age, adhering to the Hib 3-dose PRP-OMP Series",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "2-Dose Adolescent Series",
			"Text" : "As per the 1/28/11 MMWR General Recommendations, a 2-dose series separated by at least 4 months of adult formulation Recombivax HB is licensed for use in children aged 11 through 15 years",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "3-Dose Twinrix Series for Adults 18 and Over",
			"Text" : "A 3-dose Twinrix series for adults 18 and over",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Hib",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Hib 3-dose PRP-OMP series",
			"TargetDisease" : "Hib",
			"VaccineGroup" : "Hib",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib-Hep B",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "12 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib -Hep B",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "16 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "15 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib-Hep B",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "10 months + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "16 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Hib 4-dose Series",
			"TargetDisease" : "Hib",
			"VaccineGroup" : "Hib 4",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib, unspecified formulation",
								"CvxCode" : 17,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "ActHIB",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "OmniHIB",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-HepB",
								"CvxCode" : 102,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB,historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib, unspecified formulation",
								"CvxCode" : 17,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "ActHIB",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "OmniHIB",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-HepB",
								"CvxCode" : 102,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB,historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "16 weeks",
						"AbsoluteMinimumInterval" : "4 weeks-4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "12 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib, unspecified formulation",
								"CvxCode" : 17,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "ActHIB",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "OmniHIB",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "12 Months",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-HepB",
								"CvxCode" : 102,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB,historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "16 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "15 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib, unspecified formulation",
								"CvxCode" : 17,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib-HepB",
								"CvxCode" : 51,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Hib",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-HepB",
								"CvxCode" : 102,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB,historical",
								"CvxCode" : 132,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV-Hib-HepB",
								"CvxCode" : 146,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "10 months + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "16 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Recommendations of the Advisory Committee on Immunization Practices (ACIP) – January 28, 2011",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Pink Book: Epidemiology of Vaccine Preventable Diseases, 12th edition, Hib Chapter, pp. 93-97",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Haemophilus b conjugate vaccines for the prevention of Haemophilus influenza infections in children 2 months and older:Recommendations of the ACIP.  http://www.cdc.gov/mmwr/preview/mmwrhtml/00041736.htm",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "“Ask the Experts” responses for Hib vaccine. http://www.immunize.org/askexperts/experts_hib.asp",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "Hib unspecified formulation",
				"CvxCode" : 17,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "DTP-Hib",
				"CvxCode" : 22,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Tetramune",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "HbOC",
				"CvxCode" : 47,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Hibtiter",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "PRP-T",
				"CvxCode" : 48,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "ActHIB",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "12mo to <5 yrs",
			"AllowableAgeRange" : "12mo-4d to <5 yrs",
			"VaccineType" : {
				"Name" : "PRP-T",
				"CvxCode" : 48,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Hiberix",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "PRP-T",
				"CvxCode" : 48,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "OmniHIB",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "PRP-OMP",
				"CvxCode" : 49,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "PedvaxHIB",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "12 mo to <5 yrs",
			"AllowableAgeRange" : "12 mo-4 d to <5 yr",
			"VaccineType" : {
				"Name" : "DTaP-Hib",
				"CvxCode" : 50,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "TriHibit",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "Hib-HepB",
				"CvxCode" : 51,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Comvax",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "DTP-Hib-HepB",
				"CvxCode" : 102,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "DTaP-Hib-IPV",
				"CvxCode" : 120,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pentacel",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "DTaP-IPV-Hib-HepB,historical",
				"CvxCode" : 132,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 wk to <5 yrs",
			"AllowableAgeRange" : "6 wk-4 d to <5 yrs",
			"VaccineType" : {
				"Name" : "DTaP-IPV-Hib-HepB",
				"CvxCode" : 146,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "4 dose series Summary",
			"Text" : "This series defines the minimum and recommended ages and catch-up schedules (via skip dose) for the 4 dose Hib series applied to CVX codes  17, 22, 47, 48, 49, 50, 51, 102, 120, 132 and 146",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "3 dose series Summary",
			"Text" : "This series defines the minimum and recommended ages and catch-up schedules for the 3 dose Hib series applied when CVX codes 49 and 51 are used for the primary series",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "HPV",
	"StandardSeriesCollection" : [{
			"SeriesName" : "HPV Female 3 Dose",
			"TargetDisease" : "HPV",
			"VaccineGroup" : "HPV",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV4",
								"CvxCode" : 62,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV2",
								"CvxCode" : 118,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV Unspecified",
								"CvxCode" : 137,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "Female",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years",
						"LatestRecommendedAge" : "13 years + 4 weeks",
						"AbsoluteMinimumAge" : "9 years - 4 days",
						"MinimumAge" : "9 years",
						"MaximumAge" : "27 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV4",
								"CvxCode" : 62,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV2",
								"CvxCode" : 118,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV Unspecified",
								"CvxCode" : 137,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "16 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "Female",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years + 2 months",
						"LatestRecommendedAge" : "13 years + 2 months + 4 weeks",
						"AbsoluteMinimumAge" : "9 years + 4 weeks - 4 days",
						"MinimumAge" : "9 years + 4 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "N",
						"EarliestRecommendedInterval" : "24 weeks",
						"LatestRecommendedInterval" : "29 weeks",
						"AbsoluteMinimumInterval" : "16 weeks",
						"FromTargetDoseInSeries" : "1",
						"MinimumInterval" : "24 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "11 years + 6 months",
						"LatestRecommendedAge" : "13 years + 6 Months + 4 weeks",
						"AbsoluteMinimumAge" : "9 years + 16 weeks",
						"MinimumAge" : "9 years + 24 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "HPV4 Male 3 Dose",
			"TargetDisease" : "HPV",
			"VaccineGroup" : "HPV",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV4",
								"CvxCode" : 62,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV Unspecified",
								"CvxCode" : 137,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "Male",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years",
						"LatestRecommendedAge" : "13 years + 4 weeks",
						"AbsoluteMinimumAge" : "9 years - 4 days",
						"MinimumAge" : "9 years",
						"MaximumAge" : "22 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV4",
								"CvxCode" : 62,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "HPV Unspecified",
								"CvxCode" : 137,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "16 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "Male",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years + 2 months",
						"LatestRecommendedAge" : "13 years + 2 months + 4 weeks",
						"AbsoluteMinimumAge" : "9 years + 4 weeks - 4 days",
						"MinimumAge" : "9 years + 4 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "N",
						"EarliestRecommendedInterval" : "24 weeks",
						"LatestRecommendedInterval" : "29 weeks",
						"AbsoluteMinimumInterval" : "16 weeks",
						"FromTargetDoseInSeries" : "1",
						"MinimumInterval" : "24 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "11 years + 6 months",
						"LatestRecommendedAge" : "13 years + 6 Months + 4 weeks",
						"AbsoluteMinimumAge" : "9 years + 16 weeks",
						"MinimumAge" : "9 years + 24 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC HPV  Vaccine Information Statements (VIS):   http://www.cdc.gov/vaccines/pubs/vis/downloads/vis-hpv-gardasil.pdf;",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC HPV Vaccine Information for Clinicians - Fact Sheet http://www.cdc.gov/std/HPV/STDFact-HPV-vaccine-hcp.htm",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Pink Book, Appendix A http://www.cdc.gov/vaccines/pubs/acip-list.htm",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "MMRW,  December 10, 2010, Vol 59, No. RR-11",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Ask the experts on HPV http://www.immunize.org/askexperts/experts_hpv.asp",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "FDA Licensure of Bivalent Human Papillomavirus Vaccine (HPV2, Cervarix) for Use in Females and Updated HPV Vaccination Recommendations from the ACIP http://www.cdc.gov/mmwr/preview/mmwrhtml/mm5920a4.htm",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "ACIP General Recommendations http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : "9 - 26yrs female, 9-21yrs male",
			"AllowableAgeRange" : "9yrs and older",
			"VaccineType" : {
				"Name" : "HPV4",
				"CvxCode" : 62,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Gardasail",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "9 - 26yrs female only",
			"AllowableAgeRange" : "9yrs and older",
			"VaccineType" : {
				"Name" : "HPV2",
				"CvxCode" : 118,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Cervarix",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : "Licensed for use in females only",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : null,
			"PreferableAgeRange" : "9 - 26yrs",
			"AllowableAgeRange" : "9yrs and older",
			"VaccineType" : {
				"Name" : "HPV Unspecified",
				"CvxCode" : 137,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "na",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "HPV Female 3 Dose",
			"Text" : "3 dose female series consisting of CVX 62, 118, and 137",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "HPV Male 3 Dose",
			"Text" : "3 dose male series consisting of CVX 62 and 137",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Influenza",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Influenza Standard Series",
			"TargetDisease" : "Influenza",
			"VaccineGroup" : "Influenza",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "7/1/2012",
						"EndDate" : "6/30/2013",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, split incl. purified surface antigen",
								"CvxCode" : 15,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, whole",
								"CvxCode" : 16,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, Unspecified",
								"CvxCode" : 88,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "2 years",
							"VaccineTypeEndAge" : "50 years",
							"VaccineType" : {
								"Name" : "Influenza, live, intranasal",
								"CvxCode" : 111,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "3 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Flurarix",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "4 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluvirin - Preservative Free",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "3 years",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone - Preservative Free",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "3 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone - Preservative Free",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "4 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluvirin",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "9 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "6 months - 4 days",
						"MinimumAge" : "6 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, split incl. purified surface antigen",
								"CvxCode" : 15,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, whole",
								"CvxCode" : 16,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, Unspecified",
								"CvxCode" : 88,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "2 years",
							"VaccineTypeEndAge" : "50 years",
							"VaccineType" : {
								"Name" : "Influenza, live, intranasal",
								"CvxCode" : 111,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "3 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Flurarix",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "4 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluvirin - Preservative Free",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "3 years",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone - Preservative Free",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "3 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone - Preservative Free",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "9 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Afluria, Preservative Free",
								"MvxCode" : "CSL",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "4 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluvirin",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : "7/1/2010",
						"ConditionalEndDate" : "6/30/2013",
						"ConditionSet" : "1",
						"CvxList" : [
							15,
							16,
							88,
							111,
							135,
							140,
							141,
							144
						],
						"DoseCount" : 2,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : null,
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "9 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "7/1/2012",
						"EndDate" : "6/30/2013",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, split incl. purified surface antigen",
								"CvxCode" : 15,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, whole",
								"CvxCode" : 16,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, Unspecified",
								"CvxCode" : 88,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "2 years",
							"VaccineTypeEndAge" : "50 years",
							"VaccineType" : {
								"Name" : "Influenza, live, intranasal",
								"CvxCode" : 111,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "18 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Agriflu",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "3 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Flurarix",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "4 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluvirin - Preservative Free",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "3 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone - Preservative Free",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "9 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable preservative free",
								"CvxCode" : 140,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Afluria, Preservative Free",
								"MvxCode" : "CSL",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "4 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluvirin",
								"MvxCode" : "NOV",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "9 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Afluria",
								"MvxCode" : "CSL",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "18 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, injectable",
								"CvxCode" : 141,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Flulaval",
								"MvxCode" : "SKB",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "65 years",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Influenza, high dose seasonal",
								"CvxCode" : 135,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone - High Dose",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "18 years",
							"VaccineTypeEndAge" : "65 years",
							"VaccineType" : {
								"Name" : "Influenza, intradermal, preservative free",
								"CvxCode" : 144,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "Fluzone Intradermal",
								"MvxCode" : "PMC",
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : "7/1/2012",
						"ConditionalEndDate" : "6/30/2013",
						"ConditionSet" : "1",
						"CvxList" : [
							15,
							16,
							88,
							111,
							135,
							140,
							141,
							144
						],
						"DoseCount" : 1,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "Yes",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "9 years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "9 years",
						"MinimumAge" : "9 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "Prevention and Control of Influenza with Vaccines: Recommendations of the Advisory Committee on Immunization Practices (ACIP) - United States, 2012-13 Influenza Season.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Inactive",
			"PreferableAgeRange" : ">= 6 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, split incl. purified surface antigen",
				"CvxCode" : 15,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : ">= 6 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, whole",
				"CvxCode" : 16,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : ">= 6 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, Unspecified",
				"CvxCode" : 88,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "2 years to < 50 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, live, intranasal",
				"CvxCode" : 111,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 18 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable preservative free",
				"CvxCode" : 140,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Agriflu",
				"MvxCode" : "NOV",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 3 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable preservative free",
				"CvxCode" : 140,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Flurarix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 4 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable preservative free",
				"CvxCode" : 140,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Fluvirin - Preservative Free",
				"MvxCode" : "NOV",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 3 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable preservative free",
				"CvxCode" : 140,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Fluzone - Preservative Free",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 9 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable preservative free",
				"CvxCode" : 140,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Afluria, Preservative Free",
				"MvxCode" : "CSL",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 4 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable",
				"CvxCode" : 141,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Fluvirin",
				"MvxCode" : "NOV",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 6 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable",
				"CvxCode" : 141,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Fluzone",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 9 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable",
				"CvxCode" : 141,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Afluria",
				"MvxCode" : "CSL",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 18 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, injectable",
				"CvxCode" : 141,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Flulaval",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 65 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, high dose seasonal",
				"CvxCode" : 135,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Fluzone - High Dose",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "18 years to < 65 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Influenza, intradermal, preservative free",
				"CvxCode" : 144,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Fluzone Intradermal",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Flu Standard series Summary",
			"Text" : "The Flu Standard series starts with birth and walks through childhood and adult recommendations via skip dose (as needed) and recurring dose in conjunction with interval and conditional need.  This series will be tweaked annually to align with flu recomme",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "MCV",
	"StandardSeriesCollection" : [{
			"SeriesName" : "MCV Standard Series",
			"TargetDisease" : "MCV",
			"VaccineGroup" : "MCV",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, unspecified",
								"CvxCode" : 108,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, MCV4O",
								"CvxCode" : 136,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MCV4, unspecified",
								"CvxCode" : 147,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, MPSV4",
								"CvxCode" : 32,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, MCV4P",
								"CvxCode" : 114,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "16 years - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years",
						"LatestRecommendedAge" : "13 years + 4 weeks",
						"AbsoluteMinimumAge" : "2 years - 4 days",
						"MinimumAge" : "2 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, unspecified",
								"CvxCode" : 108,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, MCV4O",
								"CvxCode" : 136,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MCV4, unspecified",
								"CvxCode" : 147,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, MPSV4",
								"CvxCode" : 32,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Meningococcal, MCV4P",
								"CvxCode" : 114,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "5 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "16 years",
						"LatestRecommendedAge" : "17 years + 4 weeks",
						"AbsoluteMinimumAge" : "11 years + 8 weeks - 4 days",
						"MinimumAge" : "11 years + 8 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : ">= 2 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Meningococcal, MPSV4",
				"CvxCode" : 32,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Menomune",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : ">= 2 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Meningococcal, unspecified",
				"CvxCode" : 108,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "n/a",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 2 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Meningococcal, MCV4P",
				"CvxCode" : 114,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Menactra",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : ">= 2 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Meningococcal, MCV4O",
				"CvxCode" : 136,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Menveo",
				"MvxCode" : "NOV",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : ">= 2 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "MCV4, unspecified",
				"CvxCode" : 147,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "n/a",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "MCV standard 2-dose series Summary",
			"Text" : "Standard 2-dose series which allows for skipping the first dose if not administered by age 16 years.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Measles",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Measles Standard 2-dose Series",
			"TargetDisease" : "Measles",
			"VaccineGroup" : "MMR",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMR",
								"CvxCode" : 3,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Measles/Rubella",
								"CvxCode" : 4,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Measles",
								"CvxCode" : 5,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "16 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMR",
								"CvxCode" : 3,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Measles/Rubella",
								"CvxCode" : 4,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Measles",
								"CvxCode" : 5,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "13 months - 4 days",
						"MinimumAge" : "13 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : ">= 12 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "MMR",
				"CvxCode" : 3,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "M-M-R II",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Measles/Rubella",
				"CvxCode" : 4,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Measles",
				"CvxCode" : 5,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Attenuvax",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "12 months to < 13 years",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "MMRV",
				"CvxCode" : 94,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Proquad",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Measles Standard 2-dose Summary",
			"Text" : "Standard 2-dose series at 12 months and 4 years of age",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Mumps",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Mumps Standard 2-dose Series",
			"TargetDisease" : "Mumps",
			"VaccineGroup" : "MMR",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMR",
								"CvxCode" : 3,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Mumps",
								"CvxCode" : 7,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rubella/Mumps",
								"CvxCode" : 38,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "16 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMR",
								"CvxCode" : 3,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Mumps",
								"CvxCode" : 7,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rubella/Mumps",
								"CvxCode" : 38,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "13 months - 4 days",
						"MinimumAge" : "13 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : ">= 12 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "MMR",
				"CvxCode" : 3,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "M-M-R II",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Mumps",
				"CvxCode" : 7,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Mumpsvax",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Rubella/Mumps",
				"CvxCode" : 38,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Biavax II",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "12 months to < 13 years",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "MMRV",
				"CvxCode" : 94,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Proquad",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Mumps Standard 2-dose Summary",
			"Text" : "Standard 2-dose series at 12 months and 4 years of age",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "PCV",
	"StandardSeriesCollection" : [{
			"SeriesName" : "PCV 4 Dose",
			"TargetDisease" : "PCV",
			"VaccineGroup" : "PCV",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV13",
								"CvxCode" : 133,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV7",
								"CvxCode" : 100,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "12 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV13",
								"CvxCode" : 133,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV7",
								"CvxCode" : 100,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "12 Months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV13",
								"CvxCode" : 133,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV7",
								"CvxCode" : 100,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "24 months - 4 days",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14  weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "PCV13",
								"CvxCode" : 133,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "7 months + 4 weeks",
						"AbsoluteMinimumInterval" : "8 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "8 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "16 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Vaccine and Preventable Diseases:  Pneumococcal; http://www.cdc.gov/vaccines/vpd-vac/pneumo/default.htm#clinical",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "MMWR,  December 10, 2010, Vol 59, No. RR-11",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Pink Book, Appendix A",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : "6 Weeks to <5yrs",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "PCV13",
				"CvxCode" : 133,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "6 Weeks to <5yrs",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "PCV7",
				"CvxCode" : 100,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : "not allowed as last dose in series.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "PCV 4 Dose Summary",
			"Text" : "Quick notes on PCV13 4 Dose\n• Minimum interval for persons behind schedule is 4 weeks for persons < 12months of age;  8 weeks for persons >= 12months.   1,2 and 3 dose catchup schedules are defined within this series.\n• PCV13 is a transition schedule.   F",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Pertussis",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Pertussis Standard Series",
			"TargetDisease" : "Pertussis",
			"VaccineGroup" : "DTaP/Tdap/Td",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks – 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 Years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks – 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 Years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "13 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 months",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "4 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "15 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months – 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 5,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "4 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years",
						"AbsoluteMinimumAge" : "4 years – 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 6,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : 1,
						"TotalCoundOfValidDoses" : 4,
						"FirstDoseBeginDate" : "0 days",
						"FirstDoseEndDate" : "1 year",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 7,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "10 years",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "2 years",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "5 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "11 years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "11 years",
						"MinimumAge" : "11 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP",
				"CvxCode" : 20,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Infanrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP, 5 pertussis antigens",
				"CvxCode" : 106,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Daptacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hep B-IPV",
				"CvxCode" : 110,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pediarix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib-IPV",
				"CvxCode" : 120,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pentacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-IPV",
				"CvxCode" : 130,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Kinrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib",
				"CvxCode" : 50,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTP",
				"CvxCode" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTP-Hib",
				"CvxCode" : 22,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Tdap",
				"CvxCode" : 115,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC and SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Pertussis Standard Series Summary",
			"Text" : "* This series starts with the standard 5 dose series for children < 7 years old.  It includes the ability to skip the 5th dose if the 4th dose is administered after 4 years.\n* Dose 6, addresses adolescent dose of Tdap based on the number of valid doses re",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Polio",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Polio - All IPV - 4 Dose",
			"TargetDisease" : "Polio",
			"VaccineGroup" : "Polio",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "Yes",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : "n/a",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "n/a",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "15 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "4 years - 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Polio - All OPV - 4 Dose",
			"TargetDisease" : "Polio",
			"VaccineGroup" : "Polio",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 3,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "OPV",
								"CvxCode" : 2,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : "n/a",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "n/a",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "OPV",
								"CvxCode" : 2,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "OPV",
								"CvxCode" : 2,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "4 years - 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "OPV",
								"CvxCode" : 2,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "4 years - 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Polio IPV/OPV Mixed 4 Dose",
			"TargetDisease" : "Polio",
			"VaccineGroup" : "Polio",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "OPV",
								"CvxCode" : 2,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "15 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : null,
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "IPV",
								"CvxCode" : 10,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "7 years",
							"VaccineType" : {
								"Name" : "DTaP-HepB-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [],
					"ConditionalNeed" : null,
					"SubstituteDose" : null,
					"RecurringDose" : null,
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : null,
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "4 years - 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "Updated Recommendations of the Advisory Committee on Immunization Practices (ACIP) Regarding Routine Poliovirus Vaccination, August 7, 2009",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Epidemiology and Prevention of Vaccine-Preventable Diseases - The Pink Book: Course Textbook - 12th Edition Second Printing (May 2012)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : ">= 2 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "IPV",
				"CvxCode" : 10,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Ipol",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "< 7 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-HepB-IPV",
				"CvxCode" : 110,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pediarix",
				"MvxCode" : "GSK",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "< 5 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib-IPV",
				"CvxCode" : 120,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pentacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Polio, unspecified formulation",
				"CvxCode" : 89,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "< 5 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-IPV-Hib-HepB, Historical",
				"CvxCode" : 132,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "4 years to < 7 years",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-IPV",
				"CvxCode" : 130,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Kinrix",
				"MvxCode" : "GSK",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "OPV",
				"CvxCode" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Polio IPV/OPV Mixed 4 Dose Summary",
			"Text" : "Four dose schedule recommended at 2 months, 4 months, 6 - 18 months and 4 - 6 years of age.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Polio - All IPV - 4 Dose Summary",
			"Text" : "Four dose schedule with all doses administered as IPV.  Dose 3 can be skipped if it is not administered by age 4 years resulting in a 3 dose series.  Must be an all IPV schedule.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Polio - All OPV - 4 Dose Summary",
			"Text" : "Four dose schedule with all doses administered as OPV.  Dose 3 can be skipped if it is not administered by age 4 years resulting in a 3 dose series.  Must be an all OPV schedule.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Rotavirus",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Rotavirus 3-dose late start",
			"TargetDisease" : "Rotavirus",
			"VaccineGroup" : "Rotavirus",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 3,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, pentavalent",
								"CvxCode" : 116,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 2.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, unspecified formulation",
								"CvxCode" : 122,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, tetravalent",
								"CvxCode" : 74,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "15 weeks",
						"MinimumAge" : "15 weeks",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, pentavalent",
								"CvxCode" : 116,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 2.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, unspecified formulation",
								"CvxCode" : 122,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, tetravalent",
								"CvxCode" : 74,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, pentavalent",
								"CvxCode" : 116,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 2.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, unspecified formulation",
								"CvxCode" : 122,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, tetravalent",
								"CvxCode" : 74,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Rotavirus 3-dose",
			"TargetDisease" : "Rotavirus",
			"VaccineGroup" : "Rotavirus",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, pentavalent",
								"CvxCode" : 116,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 2.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, unspecified formulation",
								"CvxCode" : 122,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, tetravalent",
								"CvxCode" : 74,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : "n/a",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "n/a",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 Months",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "15 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, pentavalent",
								"CvxCode" : 116,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 2.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, unspecified formulation",
								"CvxCode" : 122,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, tetravalent",
								"CvxCode" : 74,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, pentavalent",
								"CvxCode" : 116,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 2.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, unspecified formulation",
								"CvxCode" : 122,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, tetravalent",
								"CvxCode" : 74,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Rotavirus, monovalent 2-dose late start",
			"TargetDisease" : "Rotavirus",
			"VaccineGroup" : "Rotavirus",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 4,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 1.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : null,
						"MinimumAge" : "15 weeks",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 1.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Rotavirus, monovalent 2-dose",
			"TargetDisease" : "Rotavirus",
			"VaccineGroup" : "Rotavirus",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "Yes",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 1.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : "n/a",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "n/a",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "15 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rotavirus, monovalent",
								"CvxCode" : 119,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 1.0,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "8 months + 1 day",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "Immunization Schedule 0 – 6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Catch-up Immunization Schedule 4 months  – 18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs /MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 37, 41, 83",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "n/a",
			"PreferableAgeRange" : ">= 6 weeks",
			"AllowableAgeRange" : "n/a",
			"VaccineType" : {
				"Name" : "Rotavirus, pentavalent",
				"CvxCode" : 116,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Rotateq",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 2.0,
			"Notes" : "n/a",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "n/a",
			"PreferableAgeRange" : ">= 6 weeks",
			"AllowableAgeRange" : "n/a",
			"VaccineType" : {
				"Name" : "Rotavirus, unspecified formulation",
				"CvxCode" : 122,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "n/a",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : "n/a",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "n/a",
			"PreferableAgeRange" : ">= 6 weeks",
			"AllowableAgeRange" : "n/a",
			"VaccineType" : {
				"Name" : "Rotavirus, tetravalent",
				"CvxCode" : 74,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "n/a",
				"MvxCode" : null,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : "n/a",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "n/a",
			"PreferableAgeRange" : ">= 6 weeks",
			"AllowableAgeRange" : "n/a",
			"VaccineType" : {
				"Name" : "Rotavirus, monovalent",
				"CvxCode" : 119,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Rotarix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 1.0,
			"Notes" : "n/a",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Rotavirus 3-dose Summary",
			"Text" : "Recommended 3-dose Rotavirus series.  Administer the first dose at age 6 through 14 weeks (maximum age: 14 weeks 6 days). Vaccination should not be initiated for infants aged 15 weeks 0 days or older.  The maximum age for the final dose in the series is 8",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Rotavirus 3-dose late start Summary",
			"Text" : "For infants to whom dose 1 of rotavirus vaccine is administered INADVERTENTLY at age 15 weeks and 0 days or older, the rest of the rotavirus vaccination series should be completed according to the schedule and by age 8 months and 0 days because timing of ",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Rotavirus, monovalent 2-dose late start Summary",
			"Text" : "If Rotavirus, monovalent (Rotarix) vaccine is administered at ages 2 and 4 months, a dose at 6 months is not indicated.  Administer the first dose at age 6 through 14 weeks (maximum age: 14 weeks 6 days). Vaccination should not be initiated for infants ag",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Rotavirus, monovalent 2-dose late start Summary",
			"Text" : "For infants to whom dose 1 of Rotavirus, monovalent (Rotarix) vaccine is administered INADVERTENTLY at age 15 weeks and 0 days or older, the rest of the rotavirus vaccination series should be completed according to the schedule and by age 8 months and 0 d",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Rubella",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Rubella Standard 2-dose Series",
			"TargetDisease" : "Rubella",
			"VaccineGroup" : "MMR",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMR",
								"CvxCode" : 3,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Measles/Rubella",
								"CvxCode" : 4,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rubella",
								"CvxCode" : 6,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rubella/Mumps",
								"CvxCode" : 38,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 months",
						"LatestRecommendedAge" : "16 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months - 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMR",
								"CvxCode" : 3,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : null,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Measles/Rubella",
								"CvxCode" : 4,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rubella",
								"CvxCode" : 6,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Rubella/Mumps",
								"CvxCode" : 38,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "13 months - 4 days",
						"MinimumAge" : "13 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : ">= 12 months",
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "MMR",
				"CvxCode" : 3,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "M-M-R II",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Measles/Rubella",
				"CvxCode" : 4,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Rubella",
				"CvxCode" : 6,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Meruvax",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : "n/a",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "Rubella/Mumps",
				"CvxCode" : 38,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Biavax II",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "12 months to < 13 years",
			"AllowableAgeRange" : ">= 12 months",
			"VaccineType" : {
				"Name" : "MMRV",
				"CvxCode" : 94,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Proquad",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Rubella Standard 2-dose Summary",
			"Text" : "Standard 2-dose series at 12 months and 4 years of age",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Tetanus",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Tetanus Standard Series",
			"TargetDisease" : "Tetanus",
			"VaccineGroup" : "DTaP/Tdap/Td",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "Yes",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "2 months",
						"LatestRecommendedAge" : "3 months + 4 weeks",
						"AbsoluteMinimumAge" : "6 weeks - 4 days",
						"MinimumAge" : "6 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "5 years",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : null,
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks – 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 Years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 months",
						"LatestRecommendedAge" : "5 months + 4 weeks",
						"AbsoluteMinimumAge" : "10 weeks - 4 days",
						"MinimumAge" : "10 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 3,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "8 weeks",
						"LatestRecommendedInterval" : "13 weeks",
						"AbsoluteMinimumInterval" : "4 weeks – 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 Years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "6 months",
						"LatestRecommendedAge" : "7 months + 4 weeks",
						"AbsoluteMinimumAge" : "14 weeks - 4 days",
						"MinimumAge" : "14 weeks",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 4,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "13 months + 4 weeks",
						"AbsoluteMinimumInterval" : "4 months",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "4 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "15 months",
						"LatestRecommendedAge" : "19 months + 4 weeks",
						"AbsoluteMinimumAge" : "12 months – 4 days",
						"MinimumAge" : "12 months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 5,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "4 years + 4 weeks",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "7 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years",
						"AbsoluteMinimumAge" : "4 years – 4 days",
						"MinimumAge" : "4 years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 6,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : 1,
						"TotalCoundOfValidDoses" : 2,
						"FirstDoseBeginDate" : "0 days",
						"FirstDoseEndDate" : "1 year",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : null,
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 7,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "4 weeks - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 8,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP",
								"CvxCode" : 20,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP, 5 pertussis antigens",
								"CvxCode" : 106,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hep B-IPV",
								"CvxCode" : 110,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib-IPV",
								"CvxCode" : 120,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-IPV",
								"CvxCode" : 130,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP",
								"CvxCode" : 1,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTP-Hib",
								"CvxCode" : 22,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DTaP-Hib",
								"CvxCode" : 50,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "DT",
								"CvxCode" : 28,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "6 months",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "6 months - 4 days",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "6 months",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "11 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "7 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "7 years",
						"MinimumAge" : "7 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 9,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td",
								"CvxCode" : 9,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Td p-free",
								"CvxCode" : 113,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Tdap",
								"CvxCode" : 115,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : null,
							"VaccineTypeEndAge" : null,
							"VaccineType" : {
								"Name" : "n/a",
								"CvxCode" : 0,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "Yes",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "10 years",
						"LatestRecommendedInterval" : "n/a",
						"AbsoluteMinimumInterval" : "2 years",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "5 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "n/a",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : "n/a",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "CDC Immunization Schedule 0-6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "CDC Immunization Schedule 7-18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs – MMWR/ January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg 36 – 45 (http://www.cdc.gov/mmwr/pdf/rr/rr6002.pdf)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "IIS: HL7 Standard Code Set: Map product names to CVX MVX (http://www2a.cdc.gov/nip/IIS/IISStandards/vaccines.asp?rpt=tradename)",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP",
				"CvxCode" : 20,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Infanrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP, 5 pertussis antigens",
				"CvxCode" : 106,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Daptacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hep B-IPV",
				"CvxCode" : 110,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pediarix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib-IPV",
				"CvxCode" : 120,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Pentacel",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-IPV",
				"CvxCode" : 130,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Kinrix",
				"MvxCode" : "SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTaP-Hib",
				"CvxCode" : 50,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTP",
				"CvxCode" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Inactive",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DTP-Hib",
				"CvxCode" : 22,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : null,
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "DT",
				"CvxCode" : 28,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Tdap",
				"CvxCode" : 115,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC and SKB",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Td",
				"CvxCode" : 9,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : null,
			"AllowableAgeRange" : null,
			"VaccineType" : {
				"Name" : "Td p-free",
				"CvxCode" : 113,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "",
				"MvxCode" : "PMC",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : null,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Tetanus Standard Series Summary",
			"Text" : "* This series starts with the standard 5 dose series for children < 7 years old.  It includes the ability to skip the 5th dose if the 4th dose is administered after 4 years.\n* Doses 6, 7, and 8 address adolescent doses of Tdap/Td based on the number of va",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}, {
	"Name" : "Varicella",
	"StandardSeriesCollection" : [{
			"SeriesName" : "Varicella 2-Dose Adolescent Series",
			"TargetDisease" : "Varicella",
			"VaccineGroup" : "Varicella",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "13 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "13 Years",
						"MinimumAge" : "13 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "9 weeks",
						"AbsoluteMinimumInterval" : "4 weeks",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : null,
						"LatestRecommendedAge" : null,
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : null,
						"MaximumAge" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Varicella 2-Dose Adolescent Series",
			"TargetDisease" : "Varicella",
			"VaccineGroup" : "Varicella",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 2,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "13 Years",
						"LatestRecommendedAge" : "n/a",
						"AbsoluteMinimumAge" : "13 Years",
						"MinimumAge" : "13 Years",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "4 weeks",
						"LatestRecommendedInterval" : "9 weeks",
						"AbsoluteMinimumInterval" : "4 weeks",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "4 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : null,
						"LatestRecommendedAge" : null,
						"AbsoluteMinimumAge" : "n/a",
						"MinimumAge" : null,
						"MaximumAge" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Varicella 2-Dose Childhood Series",
			"TargetDisease" : "Varicella",
			"VaccineGroup" : "Varicella",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 Months",
						"LatestRecommendedAge" : "16 Months + 4 weeks",
						"AbsoluteMinimumAge" : "12 Months - 4 days",
						"MinimumAge" : "12 Months",
						"MaximumAge" : "13 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "12 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "12 Months + 4 weeks",
						"MinimumAge" : "15 Months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}, {
			"SeriesName" : "Varicella 2-Dose Childhood Series",
			"TargetDisease" : "Varicella",
			"VaccineGroup" : "Varicella",
			"SelectBestPatientSeries" : {
				"DefaultSeries" : "No",
				"ProductPath" : "No",
				"SeriesPreference" : 1,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.SelectBestPatientSeries"
			},
			"SeriesDoses" : [{
					"SeriesDoseNumber" : 1,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "n/a",
						"EarliestRecommendedInterval" : null,
						"LatestRecommendedInterval" : null,
						"AbsoluteMinimumInterval" : null,
						"FromTargetDoseInSeries" : null,
						"MinimumInterval" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "12 Months",
						"LatestRecommendedAge" : "16 Months + 4 weeks",
						"AbsoluteMinimumAge" : "12 Months - 4 days",
						"MinimumAge" : "12 Months",
						"MaximumAge" : "13 years",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}, {
					"SeriesDoseNumber" : 2,
					"SeasonalRecommendation" : {
						"StartDate" : "n/a",
						"EndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SeasonalRecommendation"
					},
					"PreferableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Varicella",
								"CvxCode" : 21,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "13 years",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"Tradename" : {
								"Name" : "n/a",
								"MvxCode" : null,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.Tradename"
							},
							"Volume" : 0.5,
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.PreferableVaccine"
						}
					],
					"AllowableVaccines" : [{
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "Zoster",
								"CvxCode" : 121,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}, {
							"VaccineTypeBeginAge" : "n/a",
							"VaccineTypeEndAge" : "n/a",
							"VaccineType" : {
								"Name" : "MMRV",
								"CvxCode" : 94,
								"CdsiDatasetId" : "Feb-2013",
								"Type" : "Cdsi.Model.VaccineType"
							},
							"CdsiDatasetId" : "Feb-2013",
							"Type" : "Cdsi.Model.AllowableVaccine"
						}
					],
					"ConditionalNeed" : {
						"ConditionalStartDate" : null,
						"ConditionalEndDate" : null,
						"ConditionSet" : "n/a",
						"CvxList" : [],
						"DoseCount" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.ConditionalNeed"
					},
					"SubstituteDose" : {
						"NumberOfTargetDosesToSubstitute" : null,
						"TotalCoundOfValidDoses" : null,
						"FirstDoseBeginDate" : "n/a",
						"FirstDoseEndDate" : null,
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SubstituteDose"
					},
					"RecurringDose" : {
						"IsRecurringDose" : "No",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.RecurringDose"
					},
					"Intervals" : {
						"FromImmediatePreviousDoseAdministered" : "Y",
						"EarliestRecommendedInterval" : "3 years",
						"LatestRecommendedInterval" : "6 years + 4 weeks",
						"AbsoluteMinimumInterval" : "4 weeks",
						"FromTargetDoseInSeries" : "n/a",
						"MinimumInterval" : "12 weeks",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Intervals"
					},
					"SkipDose" : {
						"TriggerAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.SkipDose"
					},
					"Gender" : {
						"RequiredGender" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Gender"
					},
					"Ages" : {
						"EarliestRecommendedAge" : "4 years",
						"LatestRecommendedAge" : "7 years + 4 weeks",
						"AbsoluteMinimumAge" : "12 Months + 4 weeks",
						"MinimumAge" : "15 Months",
						"MaximumAge" : "n/a",
						"CdsiDatasetId" : "Feb-2013",
						"Type" : "Cdsi.Model.Ages"
					},
					"CdsiDatasetId" : "Feb-2013",
					"Type" : "Cdsi.Model.SeriesDose"
				}
			],
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.StandardSeries"
		}
	],
	"Resources" : [{
			"Text" : "Immunization Schedule 0 - 6 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "Immunization Schedule 7 - 18 years 2012",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "General Recs / MMWR / January 28, 2011 / Vol. 60 / No. 2 / Table 1 pg. 36 - 37",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}, {
			"Text" : "MMWR June 22, 2007 / 56 (RR04); 1 - 40 Prevention of Varicella",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Resource"
		}
	],
	"Vaccines" : [{
			"Status" : "Active",
			"PreferableAgeRange" : "≥ 12 months",
			"AllowableAgeRange" : "≥ 12 months",
			"VaccineType" : {
				"Name" : "Varicella",
				"CvxCode" : 21,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Varivax",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "12 months to < 13 years",
			"AllowableAgeRange" : "≥ 12 months",
			"VaccineType" : {
				"Name" : "MMRV",
				"CvxCode" : 94,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Proquad",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.5,
			"Notes" : null,
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}, {
			"Status" : "Active",
			"PreferableAgeRange" : "≥ 60 years",
			"AllowableAgeRange" : "≥ 12 months",
			"VaccineType" : {
				"Name" : "Zoster",
				"CvxCode" : 121,
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.VaccineType"
			},
			"Tradename" : {
				"Name" : "Zostavax",
				"MvxCode" : "MSD",
				"CdsiDatasetId" : "Feb-2013",
				"Type" : "Cdsi.Model.Tradename"
			},
			"Volume" : 0.65,
			"Notes" : "Only allowable.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Vaccine"
		}
	],
	"Summaries" : [{
			"Name" : "Varicella 2-Dose Childhood Series Summary",
			"Text" : "2 doses recommended for children receiving their first dose at age 12 Months through 12 years.\n• 1st dose at age 12–15 months\n• 2nd dose at age 4–6 years",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}, {
			"Name" : "Varicella  2-Dose Adolescent Series Summary",
			"Text" : "2 doses, 4–8 weeks apart for adolescents receiving their 1st dose at age 13 years and older.",
			"CdsiDatasetId" : "Feb-2013",
			"Type" : "Cdsi.Model.Summary"
		}
	],
	"CdsiDatasetId" : "Feb-2013",
	"Type" : "Cdsi.Model.AntigenSeries"
}];
