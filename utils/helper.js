const helper = {
  show_recruiter(recruiter) {
    if (recruiter && recruiter.toLowerCase() == "recruitwell") {
      // Don't show
      return false;
    }
    return true;
  },
};

export default helper;
