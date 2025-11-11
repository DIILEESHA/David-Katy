import React, { useState } from "react";
import "./rsvp.css";
import { Home } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveRSVP } from "./firebaseConfig"; // adjust path if needed
import { Link } from "react-router-dom";

const initialState = {
  fullName: "",
  attending: "",
  additionalGuests: "",
  kidsNames: "",
  allergies: "",
  stayingHyatt: false, // <-- added
  stayingHyattFriday: false,
  stayingHyattSaturday: false,
  stayingHyattBoth: false,
  stayingElsewhere: false,
  drivingNeedTicket: false,
  songRequest: "",
  message: "",
};

export default function RSVPForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((s) => ({ ...s, [name]: checked }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
    setErrors((err) => ({ ...err, [name]: null }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.attending)
      newErrors.attending = "Please tell us whether you'll attend.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors and try again.");
      return;
    }

    setIsSaving(true);

    try {
      const base = {
        fullName: form.fullName.trim(),
        attending: form.attending,
        message: form.message?.trim() || "",
      };

      let payload;
      if (form.attending === "accept") {
        payload = {
          ...base,
          additionalGuests: form.additionalGuests.trim(),
          kidsNames: form.kidsNames.trim(),
          allergies: form.allergies.trim(),
          stayingHyatt: !!form.stayingHyatt,
          stayingHyattFriday: form.stayingHyattFriday,
          stayingHyattSaturday: form.stayingHyattSaturday,
          stayingHyattBoth: form.stayingHyattBoth,
          stayingElsewhere: form.stayingElsewhere,
          drivingNeedTicket: form.drivingNeedTicket,
          songRequest: form.songRequest.trim(),
        };
      } else {
        payload = base;
      }

      await saveRSVP(payload);

      toast.success("Thanks — your RSVP has been submitted!");
      setForm(initialState);
      setErrors({});
    } catch (err) {
      console.error("Failed to save RSVP", err);
      toast.error("Something went wrong while saving — please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const isAccepting = form.attending === "accept";
  const isDeclining = form.attending === "decline";

  return (
    <div className="r">
      <ToastContainer position="top-right" autoClose={3500} />
      <div className="rsvp_wrap" aria-live="polite">
        <div className="homey">
          <div className="homeies">
            <Link to="/">
              <Home size={20} />
            </Link>
          </div>
          <div className="homeies">/</div>
          <div className="homeies">RSVP</div>
        </div>

        <form className="rsvp_card" onSubmit={handleSubmit} noValidate>
          <h2 className="rsvp_title">Please RSVP</h2>
          <p className="rsvp_note">
            Kindly RSVP by <strong>December 30th</strong>.
          </p>

          <div className="grid-two">
            {/* Full name */}
            <label className="label-playfair" htmlFor="fullName">
              Full Name(s)
              <span className="required"> *</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              className="input-poppins"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              placeholder="e.g. Olivia Bennett"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "err-fullName" : undefined}
            />
            {errors.fullName && (
              <div id="err-fullName" className="field_error">
                {errors.fullName}
              </div>
            )}

            {/* Attending */}
            <label className="label-playfair">Will you be attending?</label>
            <fieldset
              className="radio_group"
              role="radiogroup"
              aria-required="true"
            >
              <label className="radio_label">
                <input
                  type="radio"
                  name="attending"
                  value="accept"
                  checked={form.attending === "accept"}
                  onChange={handleChange}
                />
                <span>Accepts with pleasure</span>
              </label>

              <label className="radio_label">
                <input
                  type="radio"
                  name="attending"
                  value="decline"
                  checked={form.attending === "decline"}
                  onChange={handleChange}
                />
                <span>Declines with regret</span>
              </label>

              {errors.attending && (
                <div className="field_error">{errors.attending}</div>
              )}
            </fieldset>

            {/* If accepting: show all fields */}
            {isAccepting && (
              <>
                <label className="label-playfair" htmlFor="additionalGuests">
                  Additional Guest Name(s)
                </label>
                <input
                  id="additionalGuests"
                  name="additionalGuests"
                  className="input-poppins"
                  type="text"
                  value={form.additionalGuests}
                  onChange={handleChange}
                  placeholder="Name(s) of +1, separated by commas"
                />

                <label className="label-playfair" htmlFor="kidsNames">
                  Kids who will be joining
                </label>
                <input
                  id="kidsNames"
                  name="kidsNames"
                  className="input-poppins"
                  type="text"
                  value={form.kidsNames}
                  onChange={handleChange}
                  placeholder="Child name(s) & ages (optional)"
                />

                <label className="label-playfair" htmlFor="allergies">
                  Name(s) & Allergies / Dietary Restrictions
                </label>
                <input
                  id="allergies"
                  name="allergies"
                  className="input-poppins"
                  type="text"
                  value={form.allergies}
                  onChange={handleChange}
                  placeholder="e.g. John Doe — nut allergy"
                />

                <label className="label-playfair" htmlFor="songRequest">
                  Song Request
                </label>
                <input
                  id="songRequest"
                  name="songRequest"
                  className="input-poppins"
                  type="text"
                  value={form.songRequest}
                  onChange={handleChange}
                  placeholder="What song will get you on the dance floor?"
                />
              </>
            )}

            {/* If declining: show only message to couple */}
            {isDeclining && (
              <div style={{ gridColumn: "1 / -1" }}>
                <p
                  style={{
                    margin: "0px 0 0",
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  We're sorry you can't join — please leave a message for the
                  couple below*.
                </p>
              </div>
            )}

            {/* Message (shown for both accept/decline) */}
            <label className="label-playfair" htmlFor="message">
              Message to the Couple
            </label>
            <textarea
              id="message"
              name="message"
              className="input-poppins textarea"
              rows="4"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave a note, advice, or a funny story"
            />
          </div>

          <div className="form_actions">
            <button type="submit" className="rsvp_btn" disabled={isSaving}>
              {isSaving ? "Sending..." : "Send RSVP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
