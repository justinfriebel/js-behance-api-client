import React, { Component } from "react";
import { Api } from "../../Api";
import mockExperience from "../__mocks__/experience.json";

class ProfileExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null,
      loading: false,
      error: null,
      usingMockData: false,
    };
  }

  async componentDidMount() {
    await this.fetchExperience();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.user.id !== prevProps.user.id) {
      await this.fetchExperience();
    }
  }

  fetchExperience = async () => {
    this.setState({ loading: true, error: null, usingMockData: false });

    try {
      const response = await Api.get(`/${this.props.user.id}/work_experience`);
      this.setState({
        experience: response.work_experience,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch work experience:", error);

      // Fallback to mock data for demonstration purposes
      this.setState({
        experience: mockExperience,
        loading: false,
        error: `API Error: ${error.message}`,
        usingMockData: true,
      });
    }
  };

  render() {
    const { experience, loading, error, usingMockData } = this.state;

    if (loading) {
      return <div>Loading work experience...</div>;
    }

    return (
      <div>
        {error && (
          <div
            style={{
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              color: "#856404",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "4px",
              fontSize: "0.9em",
            }}
          >
            <strong>⚠️ API Issue:</strong> {error}
            {usingMockData && (
              <div style={{ marginTop: "5px" }}>
                <em>Showing sample data below for demonstration.</em>
                <button
                  onClick={this.fetchExperience}
                  style={{
                    marginLeft: "10px",
                    padding: "2px 8px",
                    fontSize: "0.8em",
                    cursor: "pointer",
                  }}
                >
                  Retry API
                </button>
              </div>
            )}
          </div>
        )}

        {experience && experience.length > 0 && (
          <>
            <h3>
              Experience{" "}
              {usingMockData && (
                <span style={{ fontSize: "0.8em", color: "#666" }}>
                  (Sample Data)
                </span>
              )}
            </h3>
            {experience.map((item, index) => (
              <p key={`${item.position}-${item.organization}-${index}`}>
                {`${item.position} at ${item.organization}`}
                {item.location && (
                  <span style={{ color: "#666" }}> - {item.location}</span>
                )}
                {(item.start_date || item.end_date) && (
                  <span style={{ color: "#888", fontSize: "0.9em" }}>
                    {" "}
                    ({item.start_date}
                    {item.end_date ? ` to ${item.end_date}` : " - Present"})
                  </span>
                )}
              </p>
            ))}
          </>
        )}

        {!experience && !loading && <p>No work experience data available</p>}
      </div>
    );
  }
}

export default ProfileExperience;
