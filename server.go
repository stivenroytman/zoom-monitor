// Modified version of simple REST api provided on https://github.com/bradtraversy/go_restapi
// Thank you!!

package main

import (
	"encoding/json"
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

// Check struct
type AttendCheck struct {
	Time   string `json:"time"`
	Guests string `json:"guests"`
}

// Init checks var as a slice AttendCheck struct
var checks []AttendCheck

// Record attendance
func recordAttendance(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var check AttendCheck
	_ = json.NewDecoder(r.Body).Decode(&check)
	log.Printf("Check: %s", check)
	checks = append(checks, check)
	log.Printf("Check list: %s", checks)
	json.NewEncoder(w).Encode(check)
}

// Main function
func main() {
	// Init router
	r := mux.NewRouter()

	// Route handles & endpoints
	r.HandleFunc("/attend", recordAttendance).Methods("POST")

	// Start server
	log.Fatal(http.ListenAndServe(":8000", r))
}
